import { ScrollView, StyleSheet, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { Exercise } from "../../types/training";
import trainingOperations from "../../utils/db/entities/training";
import trainingData from "../../../assets/datas/exercices.json";
import { ExercicePillStats } from "../../components/ExercisePillStats/ExercisesPillStats";

type Props = {
  navigation: NavigationProp<any>;
};

type ExerciceWithName = Exercise & { name: string; made_number: number };
const ExerciceListLayout: React.FC<Props> = ({ navigation }) => {
  const context = useContext(UserContext);
  const userId = context;
  const [exercises, setExercises] = useState<ExerciceWithName[]>([]);
  useEffect(() => {
    if (!userId) return;
    (async () => {
      let parsedExercises: ExerciceWithName[] = [];
      const data = await trainingOperations.readByUserId(userId);
      const exercises = data.map((training) => training.exercises).flat();
      for (const exercise of exercises) {
        if (!parsedExercises.find((ex) => ex.id === exercise.id)) {
          if (exercise.perf.length > 0) {
            parsedExercises.push({
              ...exercise,
              name:
                trainingData.find((ex) => ex.id === exercise.id)?.name || "",
              made_number: exercise.perf.length,
            });
          }
        } else {
          const index = parsedExercises.findIndex(
            (ex) => ex.id === exercise.id
          );
          parsedExercises[index].made_number += exercise.perf.length;
        }
      }
      console.log(parsedExercises);

      setExercises(parsedExercises);
    })();
  }, [userId]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        {exercises.map((exercise: ExerciceWithName, index: number) => {
          return (
            <ExercicePillStats
              key={exercise.id}
              title={exercise.name}
              index={index}
              id={exercise.id}
              navigation={navigation}
              made_number={exercise.made_number}
              isLast={index === exercises.length - 1}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ExerciceListLayout;

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
  },
});
