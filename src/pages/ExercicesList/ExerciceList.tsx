import {StyleSheet, Text, View} from "react-native";

export default function ExerciceList() {
    return (
        <View style={styles.container}>
            <Text>ExerciceList page !</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});