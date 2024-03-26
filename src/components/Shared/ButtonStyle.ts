import {StyleSheet} from "react-native";
import { Colors } from "./Colors";

export const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: Colors["dark-primary-color"],
        width: 40,
        height: 40,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
})