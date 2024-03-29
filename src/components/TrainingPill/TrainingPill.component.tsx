import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {SvgXml} from "react-native-svg";
import {Colors} from "../Shared/Colors";
import React from "react";
import { mainText } from "../Shared/SharedStyle";
import {NavigationProp} from "@react-navigation/native";

type Props = {
    id: string,
    trainingName: string;
    date: any;
    exercicesCount: number;
    navigation: NavigationProp<any>;
}

export const TrainingPill: React.FC<Props> = ({id, trainingName, date, exercicesCount, navigation}) => {
    const formatedDate = new Date(date.seconds * 1000);
    const formatedDateToString = formatedDate.toLocaleDateString("fr-FR");
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("Training", {
                trainingId: id
            })
        }} style={styles.container}>
            <Text style={[mainText.Main, {
                color: "white",
                fontWeight: "bold"
            }]}>{trainingName}</Text>
            <View style={styles.wrapper}>
                <Text style={[mainText.Secondary, {
                    color: "white"
                }]}>{formatedDateToString}</Text>
                <Text style={[mainText.Secondary, {
                    color: "white"
                }]}>-</Text>
                <Text style={[mainText.Secondary, {
                    color: "white"
                }]}>{exercicesCount} exercices</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 10,
        width: "100%",
        padding: 15,
        borderRadius: 10,
        backgroundColor: Colors["primary-color"],
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
    }
})
