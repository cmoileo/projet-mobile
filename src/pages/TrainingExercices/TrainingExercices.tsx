import {StyleSheet, Text, View} from "react-native";

export const TrainingExercices = () => {
    return (
        <View style={styles.container}>
            <Text>Training exercices page !</Text>
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