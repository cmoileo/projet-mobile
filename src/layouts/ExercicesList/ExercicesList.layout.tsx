import {ScrollView, Text, StyleSheet, TouchableOpacity, View} from "react-native";
import {CreateExerciseDto} from "../../utils/db/dto/exercise/CreateExerciseDto";
import ExercicesData from "../../../assets/datas/exercices.json";
import {AddPerf} from "../../components/AddPerfModal/AddPerf";
import {useState} from "react";
import update from "../../utils/db/entities/training/operations/update";
import {Colors} from "../../components/Shared/Colors";
import {mainText} from "../../components/Shared/SharedStyle";

export const ExercicesListLayout = ({exercices, trainingId, training}: {exercices: CreateExerciseDto[], trainingId: string, training: any}) => {
    const [isModalVisible, setIsModalVisible] = useState<"none" | "flex">("none");
    const [selectedExerciceId, setSelectedExerciceId] = useState<number | null>(null);

    const handleClickExercice = (index: number) => {
        setIsModalVisible("flex")
        setSelectedExerciceId(index)
    }

    const handleValidateExerciceData = async (
        index: number,
        selectedWeight: number,
        selectedDecimal: number,
        selectedRepetitions: number
        ) => {
        console.log("=======================================================================")
        console.log("=======================================================================")
        console.log(index, exercices[index].perf)
        console.log("=======================================================================")
        console.log("=======================================================================")
        let newExercices = exercices
        if (newExercices[index].perf) {
            newExercices[index].perf.push({
                weight: selectedWeight,
                decimal: selectedDecimal,
                repetitions: selectedRepetitions
            });
        } else {
            newExercices[index].perf = [{
                weight: selectedWeight,
                decimal: selectedDecimal,
                repetitions: selectedRepetitions
            }]
        }
        const updatetedTraining = {
            ...training,
            exercises: newExercices
        }
        console.log("==================================== trainingId ===================================", trainingId, "===================================");
        await update(trainingId, updatetedTraining);
    }

    return (
        <>
            <ScrollView>
                <View style={styles.wrapper}>
                    {exercices.map((exercise: CreateExerciseDto, index: number) => {
                        return (
                            <TouchableOpacity style={styles.container} onPress={() => handleClickExercice(index)}>
                                <Text style={mainText.Main}>#{index + 1}</Text>
                                <Text style={mainText.Secondary}>{new Date(exercise.date.seconds * 1000).toLocaleDateString('fr-FR')}</Text>
                                <Text style={mainText.Secondary}>{ExercicesData[exercise.id].name}</Text>
                                <Text style={mainText.Secondary}>{exercise.repetions}</Text>
                                <Text style={mainText.Secondary}>{exercise.weight}kg</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
            <AddPerf handleValidateExerciceData={handleValidateExerciceData} selectedExerciceId={selectedExerciceId} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
        </>
    )
}

const styles = StyleSheet.create({
  wrapper: {
      marginTop: 20,
      display: "flex",
      flexDirection: "column",
      gap: 30,
  },
    container: {
      width: "100%",
      display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        borderStyle: "solid",
        borderColor: Colors["primary-color"],
        borderWidth: 1
    }
})