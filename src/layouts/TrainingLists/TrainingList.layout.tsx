import {View, ScrollView, Text} from "react-native";
import {TrainingPill} from "../../components/TrainingPill/TrainingPill.component";
import {AddTrainingButtonComponent} from "../../components/AddTrainingButton/AddTrainingButton.component";
import React, {useEffect, useState} from "react";
import {UserContext} from "../../App";
import readByUserId from "../../utils/db/entities/training/operations/read";
import {NavigationProp} from "@react-navigation/native";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;

type Props = {
    navigation: NavigationProp<any>;
};

export const TrainingList: React.FC<Props> = ({navigation}) => {
    const [trainings, setTrainings] = useState<DocumentData>([]);

    const userId = React.useContext(UserContext);

    useEffect(() => {
        const fetchTrainings = async () => {
            try {
                const trainingsDoc = await readByUserId(userId);
                setTrainings(trainingsDoc);
                console.log("Trainings !!!", trainingsDoc);
            } catch (error) {
                console.log("Error fetching trainings", error);
            }
        };

        fetchTrainings();
    }, []);

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
                    <TrainingPill key={training.id} trainingName={training.name} date={training.Date} exercicesCount={training.exercises.length} />
                )
            })}
        </View>
        </ScrollView>
    )
}