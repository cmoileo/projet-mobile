import {Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Dispatch, SetStateAction} from "react";
import {SvgXml} from "react-native-svg";
import RNPickerSelect from "react-native-picker-select";
import {Colors} from "../Shared/Colors";

export const AddPerf = ({isModalVisible, setIsModalVisible}: {
    isModalVisible: "flex" | "none",
    setIsModalVisible: Dispatch<SetStateAction<"none" | "flex">>
    }) => {
    const numberArray1 = Array.from({ length: 401 }, (_, index) => index - 50);
    const numberArray2 = Array.from({ length: 10 }, (_, index) => index);
        return (
            <View style={[styles.modalContainer, {display: isModalVisible}]}>
                <TouchableOpacity onPress={() => setIsModalVisible("none")} style={styles.firstWrapper}>
                    <SvgXml xml={xml} width="40" height="40" />
                </TouchableOpacity>
                <View style={styles.pickersContainer}>
                    <RNPickerSelect
                        style={styles.pickerStyle}
                        placeholder={{ label: "0", value: null }}
                        onValueChange={(value) => console.log(value)}
                        items={numberArray1.map(number => ({ label: number.toString(), value: number.toString() }))}
                    />
                    <Text style={{
                        color: Colors["primary-color"],
                        fontSize: 18,
                        fontWeight: "bold",
                    }}>.</Text>
                    <RNPickerSelect
                        style={styles.pickerStyle}
                        placeholder={{ label: "0", value: null }}
                        onValueChange={(value) => console.log(value)}
                        items={numberArray2.map(number => ({ label: number.toString(), value: number.toString() }))}
                    />
                </View>
            </View>
        )
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
    pickersContainer : {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        width: "100%",
        marginTop: 20,
    },
    pickerStyle: {
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
        }
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