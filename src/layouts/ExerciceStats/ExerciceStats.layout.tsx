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
      console.log(exerciceId);

      const training = data.filter((training) =>
        training.exercises.find((ex: Exercise) => ex.id === exerciceId)
      );
      const exercicesPerDay = training.map((training) =>
        training.exercises.filter((ex: Exercise) => ex.id === exerciceId)
      );
      console.log("exercices => ", exercicesPerDay);
      exercicesPerDay.forEach((exercices, index) => {
        for (const exercice of exercices) {
          let totalWeight = 0;
          let totalRepetitions = 0;
          let totalBreakTime = 0;
          let totalIndice = 0;
          console.log("exercice => ", exercice);
          if (exercice.perf.length === 0) return;
          for (const perf of exercice.perf) {
            totalWeight += perf.weight;
            totalRepetitions += perf.repetitions;
            totalIndice += perf.indice;
          }
          const moyenneWeight = totalWeight / exercice.perf.length;
          const moyenneRepetitions = totalRepetitions / exercice.perf.length;
          const moyenneIndice = totalIndice / exercice.perf.length;
          console.log("moyenneWeight => ", moyenneWeight, "index => ", index);
          console.log(
            "moyenneRepetitions => ",
            moyenneRepetitions,
            "index => ",
            index
          );
          console.log("moyenneIndice => ", moyenneIndice, "index => ", index);

          setDataWeight((prev) => [
            ...prev,
            { value: moyenneWeight, label: String(index + 1) },
          ]);
          setDataRepetition((prev) => [
            ...prev,
            { value: moyenneRepetitions, label: String(index + 1) },
          ]);
          setDataIndice((prev) => [
            ...prev,
            { value: moyenneIndice, label: String(index + 1) },
          ]);
        }
      });
      setTitleExercice(
        exercisesData.find((ex) => ex.id === Number(exerciceId))!.name
      );
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
