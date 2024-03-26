import {TextInput, View} from "react-native";
import {Colors} from "../Shared/Colors";

export const InputTextComponent = () => {
    return (
        <View>
            <TextInput style={styles.input} placeholder="Enter text here" />
        </View>
    );
}

const styles = {
    input: {
        height: 40,
        borderColor: Colors["divider-color"],
        color: Colors["primary-text-color"],
        margin: 12,
        borderWidth: 1,
        width: 300,
        padding: 10,
        borderRadius: 5,

    }
}