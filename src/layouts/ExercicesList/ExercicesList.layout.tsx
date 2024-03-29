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

    const [selectedWeight, setSelectedWeight] = useState<number>(0);
    const [selectedDecimal, setSelectedDecimal] = useState<number>(0);
    const [selectedRepetitions, setSelectedRepetitions] = useState<number>(0);
    const [chronoMinuteValue, setChronoMinuteValue] = useState<number>(0);
    const [chronoSecondValue, setChronoSecondValue] = useState<number>(0);

    const handleClickExercice = (index: number) => {
        setIsModalVisible("flex")
        setSelectedExerciceId(index)
        if (exercices[index].perf.weight && exercices[index].perf.repetitions && exercices[index].perf.decimal && exercices[index].perf.chrono) {
            setSelectedWeight(exercices[index].perf[exercices[index].perf.length - 1].weight)
            setSelectedDecimal(exercices[index].perf[exercices[index].perf.length - 1].decimal)
            setSelectedRepetitions(exercices[index].perf[exercices[index].perf.length - 1].repetitions)
        }
    }

    const handleValidateExerciceData = async (
        chronoMinuteValue: number,
        chronoSecondValue: number,
        index: number,
        selectedWeight: number,
        selectedDecimal: number,
        selectedRepetitions: number
        ) => {
        let newExercices = exercices
        console.log(newExercices, index)
        if (newExercices[index].perf) {
            newExercices[index].perf.push({
                weight: selectedWeight,
                decimal: selectedDecimal,
                repetitions: selectedRepetitions,
                date: new Date(),
                indice: selectedWeight * selectedRepetitions * Math.log(selectedRepetitions + 1),
                rest: {
                    minute: chronoMinuteValue,
                    second: chronoSecondValue
                }
            });
        } else {
            newExercices[index].perf = [{
                weight: selectedWeight,
                decimal: selectedDecimal,
                repetitions: selectedRepetitions,
                date: new Date(),
                indice: selectedWeight * selectedRepetitions * Math.log(selectedRepetitions + 1),
                rest: {
                    minute: chronoMinuteValue,
                    second: chronoSecondValue
                }
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
                                    <Text style={mainText.Secondary}>#{index + 1}</Text>
                                    <Text style={mainText.Main}>{ExercicesData[exercise.id].name}</Text>
                                </TouchableOpacity>
                                <View style={styles.perfsContainer}>
                                    {
                                        exercise.perf &&
                                        exercise.perf.map((perf: any, perfIndex: number) => {
                                            let isShowDate = perfIndex == 0 ? true : new Date(perf.date.seconds * 1000).toLocaleDateString('fr-FR') !== new Date(exercices[index].perf[perfIndex - 1].date.seconds * 1000).toLocaleDateString('fr-FR')

                                            let isDate = perf.date.seconds ? true : false;

                                            return !isShowDate ? (
                                                <View style={styles.perfContainer}>
                                                    <Text>{perf.weight}.{perf.decimal}kg</Text>
                                                    <Text>{perf.repetitions}reps</Text>
                                                </View>
                                            ) : (
                                                <>
                                                    <Text style={[mainText.Main, {
                                                        marginVertical: 10,
                                                    }]}>{isDate ? new Date(perf.date.seconds * 1000).toLocaleDateString('fr-FR') : new Date().toLocaleDateString("fr-FR")}</Text>
                                                    <View style={styles.perfContainer}>
                                                    <Text>{perf.weight}.{perf.decimal}kg</Text>
                                                    <Text>{perf.repetitions}reps</Text>
                                                    </View>
                                                </>
                                                )
                                            }
                                        )
                                    }
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
            <AddPerf
                chronoSecondValue={chronoSecondValue}
                setChronoSecondValue={setChronoSecondValue}
                chronoMinuteValue={chronoMinuteValue}
                setChronoMinuteValue={setChronoMinuteValue}
                selectedRepetitions={selectedRepetitions}
                setSelectedRepetitions={setSelectedRepetitions}
                selectedDecimal={selectedDecimal}
                selectedWeight={selectedWeight}
                setSelectedDecimal={setSelectedDecimal}
                setSelectedWeight={setSelectedWeight}
                handleValidateExerciceData={handleValidateExerciceData}
                selectedExerciceId={selectedExerciceId}
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible} />
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
      gap: 20,
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
      marginLeft: 30,
      marginTop: 20
    },
    perfContainer: {
     display: "flex",
     flexDirection: "row",
     gap: 10
  }
})