import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "../pages/Home/Home.page";
import { AddNewTraining } from "../pages/AddNewTraining/AddNewTraining.page";
import ExerciceStatsList from "../pages/ExerciceStatsList/ExerciceStatsList.page";
import ExerciceStats from "../pages/ExerciceStats/ExerciceStats.page";
import { TrainingPage } from "../pages/TrainingPage/Training.page";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="AddNewTraining" component={AddNewTraining} />
        <Stack.Screen
          name="Training"
          component={TrainingPage}
          initialParams={{ trainingId: "1" }}
        />
        <Stack.Screen name="ExerciceStatsList" component={ExerciceStatsList} />
        <Stack.Screen name="ExerciceStats" component={ExerciceStats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
