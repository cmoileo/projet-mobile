import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {InputTextComponent} from "../../components/InputText/InputText.component";
import {Colors} from "../../components/Shared/Colors";
import {ExercicePillComponent} from "../../components/ExercicePill/ExercicePill.component";
import {useState} from "react";
import {AddExerciceModalComponent} from "../../components/AddExerciceModal/AddExerciceModal.component";

export const AddNewTrainingLayout = () => {
    const [chosenExercices, setChosenExercices] = useState<string[] | null>(null)
    const [isModalVisible, setIsModalVisible] = useState<"none" | "flex">("none");

    return (
        <>
            <View style={styles.container}>
                <InputTextComponent/>
                <ScrollView>
                    <View style={styles.wrapper}>
                        <TouchableOpacity onPress={() => setIsModalVisible("flex")} style={styles.addButton}>
                            <Text>+ Ajouter un exercice</Text>
                        </TouchableOpacity>
                        {
                           chosenExercices && chosenExercices.map((exercice, index: number) => {
                            return (
                                <ExercicePillComponent index={index} title={exercice} chosenExercices={chosenExercices} setChosenExercices={setChosenExercices}/>
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
            <AddExerciceModalComponent isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} chosenExercices={chosenExercices} setChosenExercices={setChosenExercices} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        gap: 15,
    },
    wrapper: {
        display: "flex",
        flexDirection: "column",
        gap: 15,
    },
    addButton: {
        width: "100%",
        paddingVertical: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "dashed",
        borderWidth: 2,
        borderColor: Colors["primary-color"],
        borderRadius: 10,
    }
})