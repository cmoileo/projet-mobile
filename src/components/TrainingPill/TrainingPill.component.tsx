import {StyleSheet, Text, View} from "react-native";
import {SvgXml} from "react-native-svg";
import {Colors} from "../Shared/Colors";

export const TrainingPill = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.round}></View>
                <Text>Training Pill</Text>
            </View>
            <SvgXml xml={xml} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%",
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    round: {
        borderRadius: 10,
        backgroundColor: Colors["dark-primary-color"],
        width: 10,
        height: 10,
    }
})

const xml = `<svg fill=${Colors["dark-primary-color"]} width="15px" height="15px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.489 31.975c-0.271 0-0.549-0.107-0.757-0.316-0.417-0.417-0.417-1.098 0-1.515l14.258-14.264-14.050-14.050c-0.417-0.417-0.417-1.098 0-1.515s1.098-0.417 1.515 0l14.807 14.807c0.417 0.417 0.417 1.098 0 1.515l-15.015 15.022c-0.208 0.208-0.486 0.316-0.757 0.316z"></path>
</svg>`