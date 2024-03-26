import {StyleSheet, Text, View} from "react-native";
import {SvgXml} from "react-native-svg";
import {Colors} from "../Shared/Colors";
import React from "react";
import { mainText } from "../Shared/SharedStyle";

type Props = {
    trainingName: string;
    date: string;
    exercicesCount: number;
}

export const TrainingPill: React.FC<Props> = ({trainingName, date, exercicesCount}) => {
    return (
        <View style={styles.container}>
            <Text style={mainText.Main}>{trainingName}</Text>
            <View style={styles.wrapper}>
                <Text style={mainText.Secondary}>{date}</Text>
                <Text style={mainText.Secondary}>-</Text>
                <Text style={mainText.Secondary}>{exercicesCount} exercices</Text>
            </View>
        </View>
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
