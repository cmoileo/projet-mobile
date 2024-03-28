import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { UserContext } from "../../App";
import ChartWeight from "../../components/Chart/ChartWeight";
import trainingOperations from "../../utils/db/entities/training";
import { Exercise } from "../../types/training";
import exercisesData from "../../../assets/datas/exercices.json";
import ChartRepetition from "../../components/Chart/ChartRepetition";
import ChartBreakTime from "../../components/Chart/ChartBreakTime";

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
      exercices.forEach((exercice: Exercise, index) => {
        setDataWeight((prev) => [
          ...prev,
          { value: exercice.weight, label: String(index) },
        ]);
        setDataRepetition((prev) => [
          ...prev,
          { value: exercice.repetitions, label: String(index) },
        ]);
        setDataBreakTime((prev) => [
          ...prev,
          { value: exercice.breakTime, label: String(index) },
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
        <ChartBreakTime data={dataBreakTime} />
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
