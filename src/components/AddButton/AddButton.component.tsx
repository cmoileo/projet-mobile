import {Button, StyleSheet, View} from "react-native";
import { Colors } from "../Colors/Colors";
import React from "react";

type PropTypes = {
    onTap: () => void
}

export const AddButtonComponent: React.FC<PropTypes> = ({onTap}) => {
    return (
        <View style={styles.button}>
            <Button
                title="+"
                onPress={onTap}
                color={Colors["text-primary-color"]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors["dark-primary-color"],
        width: 40,
        height: 40,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
})