import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {CreateExerciseDto} from "../../utils/db/dto/exercise/CreateExerciseDto";
import ExercicesData from "../../../assets/datas/exercices.json";
import {AddPerf} from "../../components/AddPerfModal/AddPerf";
import {useState} from "react";
import update from "../../utils/db/entities/training/operations/update";

export const ExercicesListLayout = ({exercices, trainingId}: {exercices: CreateExerciseDto[], trainingId: number}) => {
    const [isModalVisible, setIsModalVisible] = useState<"none" | "flex">("none");
    const [selectedExerciceId, setSelectedExerciceId] = useState<number | null>(null);

    const handleClickExercice = (index: number) => {
        setIsModalVisible("flex")
        setSelectedExerciceId(index)
        console.log(selectedExerciceId)
    }

    const handleValidateExerciceData = async (
        index: number,
        selectedWeight: number,
        selectedDecimal: number,
        selectedRepetitions: number
        ) => {
        const updatetedExercice = exercices[index].perf = {
            weight: selectedWeight,
            decimal: selectedDecimal,
            repetitions: selectedRepetitions
        };
        const newExercices = [...exercices, updatetedExercice];
       await update(exercices[index].id, {perf: updatetedExercice});
    }

    console.log(exercices);
    return (
        <>
            <ScrollView>
                {exercices.map((exercise: CreateExerciseDto, index: number) => {
                    return (
                        <TouchableOpacity onPress={() => handleClickExercice(index)}>
                            <Text>{index + 1}</Text>
                            <Text>{new Date(exercise.date.seconds * 1000).toLocaleDateString('fr-FR')}</Text>
                            <Text>{ExercicesData[exercise.id].name}</Text>
                            <Text>{exercise.repetions}</Text>
                            <Text>{exercise.weight}kg</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
            <AddPerf handleValidateExerciceData={handleValidateExerciceData} selectedExerciceId={selectedExerciceId} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
        </>
    )
}