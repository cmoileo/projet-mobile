import {View, ScrollView, Text} from "react-native";
import {TrainingPill} from "../../components/TrainingPill/TrainingPill.component";
import {AddTrainingButtonComponent} from "../../components/AddTrainingButton/AddTrainingButton.component";
import React, {useContext, useEffect, useState} from "react";
import {TrainingContext, UserContext} from "../../App";
import readByUserId from "../../utils/db/entities/training/operations/read";
import {NavigationProp} from "@react-navigation/native";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;

type Props = {
    navigation: NavigationProp<any>;
};

export const TrainingList: React.FC<Props> = ({navigation}) => {
    const trainings = useContext(TrainingContext);

    const userId = React.useContext(UserContext);

    return (
        <ScrollView>
        <View style={{
            marginTop: 50,
            display: "flex",
            gap: 15,
            overflow: "scroll",
            paddingBottom: 130,
        }}>
            <AddTrainingButtonComponent navigation={navigation} />
            {trainings.map((training: any) => {
                return (
                    <TrainingPill key={training.id} trainingName={training.name} date={training.date} exercicesCount={training.exercises.length} />
                )
            })}
        </View>
        </ScrollView>
    )
}