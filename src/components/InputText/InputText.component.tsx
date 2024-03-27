import {StyleSheet, TextInput, View} from "react-native";
import {Colors} from "../Shared/Colors";

export const InputTextComponent = () => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="TITRE"
                placeholderTextColor="#3782FF"
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