import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {mainText} from "../Shared/SharedStyle";
import {Colors} from "../Shared/Colors";
import {NavigationProp} from "@react-navigation/native";

type Props = {
    navigation: NavigationProp<any>;
};

export const AddTrainingButtonComponent: React.FC<Props> = ({navigation}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("AddNewTraining")}>
            <Text style={mainText.Main}>+ Nouveau Training</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingVertical: 20,
        borderStyle: "dashed",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: Colors["primary-color"],
    },
})