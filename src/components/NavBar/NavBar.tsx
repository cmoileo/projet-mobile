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
                title="Trainings"
                onPress={() =>
                    navigation.navigate('Trainings')
                }
            />
            <Text>Exercices list</Text>
            <Text>NavBar page !</Text>
            <Text>NavBar page !</Text>
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#b3b7bd',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
})