import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../pages/Home/Home";
import {Training} from "../pages/Training/Training";
import ExerciceList from "../pages/ExercicesList/ExerciceList";
import {TrainingExercices} from "../pages/TrainingExercices/TrainingExercices";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Training"
                    component={Training} />
                <Stack.Screen
                    name="ExerciceList"
                    component={ExerciceList} />
                <Stack.Screen
                    name={"TrainingExercices"}
                    component={TrainingExercices} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;