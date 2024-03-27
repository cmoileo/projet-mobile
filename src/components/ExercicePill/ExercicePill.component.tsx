import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {Colors} from "../Shared/Colors";
import {mainText, pageTitleText} from "../Shared/SharedStyle";

type Props = {
    title: string;
    repetition_number: number;
    index: number;
    rest_time: string;
}

export const ExercicePillComponent: React.FC<Props> = ({title, repetition_number, index, rest_time}) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={{color: Colors["primary-color"]}}>{title}</Text>
                <Text>{repetition_number} rep. - {rest_time}</Text>
            </View>
            <Text style={styles.indexText}>#{index}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        alignItems: "center",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Colors["divider-color"],
    },
    indexText: {
        fontSize: 30,
        color: Colors["primary-color"],
        fontWeight: "bold",
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
    }
})