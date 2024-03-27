import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage} from "../pages/Home/Home.page";
import {AddNewTraining} from "../pages/AddNewTraining/AddNewTraining.page";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                />
                <Stack.Screen
                    name="AddNewTraining"
                    component={AddNewTraining}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MyStack;