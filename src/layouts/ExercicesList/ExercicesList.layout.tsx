import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {CreateExerciseDto} from "../../utils/db/dto/exercise/CreateExerciseDto";
import ExercicesData from "../../../assets/datas/exercices.json";
import {AddPerf} from "../../components/AddPerfModal/AddPerf";
import {useState} from "react";

export const ExercicesListLayout = ({exercices}: {exercices: CreateExerciseDto[]}) => {
    const [isModalVisible, setIsModalVisible] = useState<"none" | "flex">("none");
    const [selected, setSelected] = useState(0);

    const handleChange = (index: number) => {
        setSelected(index);
    }
    console.log(exercices);
    return (
        <>
            <ScrollView>
                {exercices.map((exercise: CreateExerciseDto, index: number) => {
                    return (
                        <TouchableOpacity onPress={() => setIsModalVisible("flex")}>
                            <Text>{index + 1}</Text>
                            <Text>{new Date(exercise.date.seconds * 1000).toLocaleDateString('fr-FR')}</Text>
                            <Text>{ExercicesData[exercise.id].name}</Text>
                            <Text>{exercise.repetions}</Text>
                            <Text>{exercise.weight}kg</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
            <AddPerf isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
        </>
    )
}