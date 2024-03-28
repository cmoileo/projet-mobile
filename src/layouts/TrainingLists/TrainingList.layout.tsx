import { View, ScrollView } from "react-native";
import { TrainingPill } from "../../components/TrainingPill/TrainingPill.component";
import { AddTrainingButtonComponent } from "../../components/AddTrainingButton/AddTrainingButton.component";
import React, { useContext } from "react";
import { TrainingContext } from "../../App";
import { NavigationProp } from "@react-navigation/native";
import firebase from "firebase/compat";

type Props = {
  navigation: NavigationProp<any>;
};

export const TrainingList: React.FC<Props> = ({ navigation }) => {
  const trainings = useContext(TrainingContext).trainings;

  return (
    <ScrollView>
      <View
        style={{
          marginTop: 50,
          display: "flex",
          gap: 15,
          overflow: "scroll",
          paddingBottom: 130,
        }}
      >
        <AddTrainingButtonComponent navigation={navigation} />
        {trainings.map((training: any) => {
          return (
            <TrainingPill
              id={training.id}
              navigation={navigation}
              key={training.id}
              trainingName={training.name}
              date={training.date}
              exercicesCount={training.exercises.length}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};
