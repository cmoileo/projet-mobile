import {StyleSheet, TextInput, View} from "react-native";
import {Colors} from "../Shared/Colors";
import React, {SetStateAction} from "react";
import {Dispatch} from "react";

export const InputTextComponent = ({setTrainingName}: {setTrainingName: Dispatch<SetStateAction<string>>}) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="TITRE"
                placeholderTextColor="#3782FF"
                onChangeText={text => setTrainingName(text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: Colors["divider-color"],
        color: Colors["primary-text-color"],
        borderWidth: 1,
        width: "100%",
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 40,
        borderRadius: 5,
        borderStyle: "dashed",

    }
})