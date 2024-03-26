import {Text, View, StyleSheet, Button} from "react-native";
import {NavigationProp} from "@react-navigation/native";
import React from "react";

type Props = {
    navigation: NavigationProp<any>;
};

export const NavBar: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button
                title="Home"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
            <Button
                title="Trainings"
                onPress={() =>
                    navigation.navigate('Trainings')
                }
            />
            <Button
                title="Exercises"
                onPress={() =>
                    navigation.navigate('ExerciceList')
                }
            />
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#b3b7bd',
        alignItems: 'center',
        paddingBottom: 50,
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'space-between',
    },
})