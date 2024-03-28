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

    const [selectedWeight, setSelectedWeight] = useState<number | null>(0);
    const [selectedDecimal, setSelectedDecimal] = useState<number | null>(0);
    const [selectedRepetitions, setSelectedRepetitions] = useState<number | null>(0);

    const handleClickExercice = (index: number) => {
        setIsModalVisible("flex")
        setSelectedExerciceId(index)
        // if (exercices[index].perf) {
        //     setSelectedWeight(exercices[index].perf[0].weight)
        //     setSelectedDecimal(exercices[index].perf[0].decimal)
        //     setSelectedRepetitions(exercices[index].perf[0].repetitions)
        // }
    }

    const handleValidateExerciceData = async (
        index: number,
        selectedWeight: number,
        selectedDecimal: number,
        selectedRepetitions: number
        ) => {
        let newExercices = exercices
        if (newExercices[index].perf) {
            newExercices[index].perf.push({
                weight: selectedWeight,
                decimal: selectedDecimal,
                repetitions: selectedRepetitions,
                date: new Date()
            });
        } else {
            newExercices[index].perf = [{
                weight: selectedWeight,
                decimal: selectedDecimal,
                repetitions: selectedRepetitions,
                date: new Date()
            }]
        }
        const updatetedTraining = {
            ...training,
            exercises: newExercices
        }
        await update(trainingId, updatetedTraining);
    }

    return (
        <>
            <ScrollView>
                <View style={styles.wrapper}>
                    {exercices.map((exercise: CreateExerciseDto, index: number) => {
                        return (
                            <View style={
                                index == exercices.length - 1 ? {
                                    paddingBottom: 100,
                                } : {
                                    paddingBottom: 0,
                                }
                            }>
                                <TouchableOpacity onPress={() => handleClickExercice(index)} style={styles.container}>
                                    <Text style={mainText.Main}>#{index + 1}</Text>
                                    <Text style={mainText.Secondary}>{new Date(exercise.date.seconds * 1000).toLocaleDateString('fr-FR')}</Text>
                                    <Text style={mainText.Secondary}>{ExercicesData[exercise.id].name}</Text>
                                    <Text style={mainText.Secondary}>{exercise.repetions}</Text>
                                    <Text style={mainText.Secondary}>{exercise.weight}kg</Text>
                                </TouchableOpacity>
                                <View style={styles.perfsContainer}>
                                    {
                                        exercise.perf &&
                                        exercise.perf.map((perf: any) => {
                                            return (
                                                <View style={styles.perfContainer}>
                                                    <Text>{perf.weight}kg</Text>
                                                    <Text>{perf.repetitions}reps</Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
            <AddPerf selectedRepetitions={selectedRepetitions} setSelectedRepetitions={setSelectedRepetitions} selectedDecimal={selectedDecimal} selectedWeight={selectedWeight} setSelectedDecimal={setSelectedDecimal} setSelectedWeight={setSelectedWeight} handleValidateExerciceData={handleValidateExerciceData} selectedExerciceId={selectedExerciceId} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
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
    },
    perfsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      marginLeft: 50,
      marginTop: 20
    },
    perfContainer: {
     display: "flex",
     flexDirection: "row",
     gap: 10
  }
})