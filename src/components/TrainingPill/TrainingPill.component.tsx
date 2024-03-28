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
            <Text style={mainText.Main}>{trainingName}</Text>
            <View style={styles.wrapper}>
                <Text style={mainText.Secondary}>{formatedDateToString}</Text>
                <Text style={mainText.Secondary}>-</Text>
                <Text style={mainText.Secondary}>{exercicesCount} exercices</Text>
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
        borderStyle: "solid",
        borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        borderColor: Colors["divider-color"],
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
    }
})
