import {InputTextComponent} from "../InputText/InputText.component";
import {
    Dimensions,
    GestureResponderEvent,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Exercices from "../../../assets/datas/exercices.json";
import {SvgXml} from "react-native-svg";
import {Colors} from "../Shared/Colors";
import {Dispatch, SetStateAction} from "react";
import {CreateExerciseDto} from "../../utils/db/dto/exercise/CreateExerciseDto";

export const AddExerciceModalComponent = ({isModalVisible, setIsModalVisible, chosenExercices, setChosenExercices}: {
    isModalVisible: "flex" | "none",
    setIsModalVisible: Dispatch<SetStateAction<"none" | "flex">>,
    chosenExercices: CreateExerciseDto[] | null,
    setChosenExercices: Dispatch<SetStateAction<CreateExerciseDto[] | null>>
    }) => {

    const handleExercicePress = (index: number): void => {
        setIsModalVisible("none");
        if (chosenExercices === null) {
            const newExercice = new CreateExerciseDto(index, new Date());
            setChosenExercices([newExercice]);
            return;
        }
        const newExercice = new CreateExerciseDto(index, new Date());
        setChosenExercices([...chosenExercices, newExercice]);
    }

    return (
        <View style={[styles.modalContainer, {display: isModalVisible}]}>
            <TouchableOpacity onPress={() => setIsModalVisible("none")} style={styles.firstWrapper}>
                <SvgXml xml={xml} width="40" height="40" />
            </TouchableOpacity>
            <ScrollView>
                <View style={styles.exercicesContainer}>
                    {
                        Exercices.map((exercice, index) => {
                            return (
                                <TouchableOpacity onPress={() => handleExercicePress(index)} key={index} style={[styles.addButton, {
                                    marginBottom: index === Exercices.length - 1 ? 30 : 0
                                }]}>
                                    <Text style={{
                                        fontSize: 18,
                                        marginBottom: 10,
                                        color: Colors["primary-color"],
                                    }}>{exercice.name}</Text>
                                    <Text>{exercice.targeted_muscles.join(" - ")}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        position: "absolute",
        bottom: 90,
        zIndex: 999999,
        paddingHorizontal: 20,
        paddingTop: 20,
        width: Dimensions.get('window').width,
        height: "60%",
        backgroundColor: "white",
        elevation: (Platform.OS === 'android') ? 100 : 100,
    },
    firstWrapper: {
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    addButton: {
        width: "100%",
        padding: 10,
        borderStyle: "solid",
        borderColor: Colors["divider-color"],
        borderWidth: 1,
        borderRadius: 10,
    },
    exercicesContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
    }
})

const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_41_857)">
<path d="M18 6L6 18" stroke="#3782FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L18 18" stroke="#3782FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_41_857">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`