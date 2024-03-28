import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { UserContext } from "../../App";
import ChartWeight from "../../components/Chart/ChartWeight";
import trainingOperations from "../../utils/db/entities/training";
import { Exercise } from "../../types/training";
import exercisesData from "../../../assets/datas/exercices.json";
import ChartRepetition from "../../components/Chart/ChartRepetition";
import ChartBreakTime from "../../components/Chart/ChartBreakTime";
import ChartIndice from "../../components/Chart/ChartIndice";

type Props = {
  exerciceId: string;
};

const ExerciceStatsLayout: React.FC<Props> = ({ exerciceId }) => {
  const [dataWeight, setDataWeight] = React.useState<
    { value: number; label: string }[]
  >([]);
  const [dataRepetition, setDataRepetition] = React.useState<
    { value: number; label: string }[]
  >([]);
  const [dataBreakTime, setDataBreakTime] = React.useState<
    { value: number; label: string }[]
  >([]);
  const [dataIndice, setDataIndice] = React.useState<
    { value: number; label: string }[]
  >([]);
  const [titleExercice, setTitleExercice] = React.useState<string>("");
  const context = React.useContext(UserContext);
  const userId = context;
  React.useEffect(() => {
    if (!userId) return;
    if (!exercisesData) return;

    const fetchData = async () => {
      const data = await trainingOperations.readByUserId(userId);
      const exercices = data
        .filter((training) =>
          training.exercises.find((ex: Exercise) => ex.id === exerciceId)
        )
        .map((training) => {
          return training.exercises;
        })
        .flat();
      const currentExercice = exercices.filter((ex) => ex.id === exerciceId);

      currentExercice.forEach((exercice: Exercise, index) => {
        let totalWeight = 0;
        let totalRepetitions = 0;
        let totalBreakTime = 0;
        let totalIndice = 0;
        for (const perf of exercice.perf) {
          totalWeight += perf.weight;
          totalRepetitions += perf.repetitions;
          totalBreakTime += perf.breakTime;
          totalIndice += perf.indice;
        }
        const moyenneWeight = totalWeight / exercice.perf.length;
        const moyenneRepetitions = totalRepetitions / exercice.perf.length;
        const moyenneBreakTime = totalBreakTime / exercice.perf.length;
        const moyenneIndice = totalIndice / exercice.perf.length;
        setDataWeight((prev) => [
          ...prev,
          { value: moyenneWeight, label: String(index + 1) },
        ]);
        setDataRepetition((prev) => [
          ...prev,
          { value: moyenneRepetitions, label: String(index + 1) },
        ]);
        setDataBreakTime((prev) => [
          ...prev,
          { value: moyenneBreakTime, label: String(index + 1) },
        ]);
        setDataIndice((prev) => [
          ...prev,
          { value: moyenneIndice, label: String(index + 1) },
        ]);
        setTitleExercice(
          exercisesData.find((ex) => ex.id === Number(exerciceId))!.name
        );
      });
    };
    fetchData();
  }, [userId]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{titleExercice}</Text>
        <ChartWeight data={dataWeight} />
        <ChartRepetition data={dataRepetition} />
        {/* <ChartBreakTime data={dataBreakTime} /> */}
        <ChartIndice data={dataIndice} />
      </View>
    </ScrollView>
  );
};

export default ExerciceStatsLayout;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    paddingBottom: 100,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#3782FF",
  },
});
