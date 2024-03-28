import {Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Dispatch, SetStateAction} from "react";
import {SvgXml} from "react-native-svg";
import RNPickerSelect from "react-native-picker-select";
import {Colors} from "../Shared/Colors";
import {buttonStyles} from "../Shared/ButtonStyle";
import {ChronoComponent} from "../Chronometre/Chrono.component";

export const AddPerf = ({
    chronoValue,
    setChronoValue,
    selectedWeight,
    setSelectedWeight,
    selectedDecimal,
    setSelectedDecimal,
    selectedRepetitions,
    setSelectedRepetitions,
    handleValidateExerciceData,
    selectedExerciceId,
    isModalVisible,
    setIsModalVisible}: {
    chronoValue: number,
    setChronoValue: Dispatch<SetStateAction<number>>,
    selectedRepetitions: number,
    setSelectedRepetitions: Dispatch<SetStateAction<number>>,
    selectedWeight: number,
    setSelectedWeight: Dispatch<SetStateAction<number>>,
    selectedDecimal: number,
    setSelectedDecimal: Dispatch<SetStateAction<number>>,
    handleValidateExerciceData: (
        chronoValue: any,
        index: number,
        selectedWeight: number,
        selectedDecimal: number,
        selectedRepetitions: number) => void,
    selectedExerciceId: number | null,
    isModalVisible: "flex" | "none",
    setIsModalVisible: Dispatch<SetStateAction<"none" | "flex">>
    }) => {

    const numberArray1 = Array.from({ length: 401 }, (_, index) => index - 50);
    const numberArray2 = Array.from({ length: 10 }, (_, index) => index);
    const numberArray3 = Array.from({ length: 50 }, (_, index) => index + 1);


    return (
            <View style={[styles.modalContainer, {display: isModalVisible}]}>
                <TouchableOpacity onPress={() => setIsModalVisible("none")} style={styles.firstWrapper}>
                    <SvgXml xml={xml} width="40" height="40" />
                </TouchableOpacity>
                <View style={styles.metricsContainer}>
                    <View style={styles.pickersContainer}>
                        <RNPickerSelect
                            // @ts-ignore
                            style={styles.pickerStyle}
                            placeholder={{ label: selectedWeight.toString(), value: selectedWeight }}
                            onValueChange={(value) => setSelectedWeight(parseInt(value))}
                            items={numberArray1.map(number => ({ label: number.toString(), value: number.toString() }))}
                        />
                        <Text style={{
                            color: Colors["primary-color"],
                            fontSize: 18,
                            fontWeight: "bold",
                        }}>.</Text>
                        <RNPickerSelect
                            // @ts-ignore
                            style={styles.pickerStyle}
                            placeholder={{ label: selectedDecimal.toString(), value: selectedDecimal }}
                            onValueChange={(value) => setSelectedDecimal(parseInt(value))}
                            items={numberArray2.map(number => ({ label: number.toString(), value: number.toString() }))}
                        />
                        <Text>kg</Text>
                    </View>
                    <View style={styles.pickersContainer}>
                        <RNPickerSelect
                            // @ts-ignore
                            style={styles.pickerStyle}
                            placeholder={{ label: selectedRepetitions.toString(), value: selectedRepetitions }}
                            onValueChange={(value) => setSelectedRepetitions(parseInt(value))}
                            items={numberArray3.map(number => ({ label: number.toString(), value: number.toString() }))}
                        />
                        <Text>reps</Text>
                    </View>
                    <ChronoComponent chronoValue={chronoValue} setChronoValue={setChronoValue} />
                    <TouchableOpacity style={styles.validateBtn} onPress={() => {
                        if (
                            selectedExerciceId === null
                            || selectedWeight === null
                            || selectedDecimal === null
                            || selectedRepetitions === null
                        ) return;
                        handleValidateExerciceData(
                            chronoValue,
                            selectedExerciceId,
                            selectedWeight,
                            selectedDecimal,
                            selectedRepetitions,
                        )
                        setIsModalVisible("none")
                    }}>
                            <Text style={{
                                color: "white",
                                fontSize: 18,
                                fontWeight: "bold",
                            }}>Valider</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

const styles = StyleSheet.create({
    modalContainer: {
        position: "absolute",
        bottom: Dimensions.get('window').height / 3,
        zIndex: 999999,
        paddingHorizontal: 20,
        paddingTop: 20,
        width: Dimensions.get('window').width,
        height: "20%",
        backgroundColor: "white",
        elevation: (Platform.OS === 'android') ? 100 : 100,
    },
    firstWrapper: {
        display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "flex-end",
        },
    pickersContainer : {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        gap: 10,
        marginTop: 20,
    },
    pickerStyle: {
        // @ts-ignore
        placeholder: {
            color: Colors["primary-color"],
            fontSize: 18,
            fontWeight: "bold",
        },
        done: {
            color: Colors["primary-color"],
            fontSize: 18,
            fontWeight: "bold",
        },
        inputIOS: {
            color: Colors["primary-color"],
            fontSize: 18,
            fontWeight: "bold",
        },
    },
    metricsContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    validateBtn: {
        ...buttonStyles.button,
        backgroundColor: Colors["primary-color"],
        width: 150,
        borderRadius: 10,
        marginTop: 20,
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