import {Text, View, StyleSheet, Button} from "react-native";
import {NavigationProp} from "@react-navigation/native";
import React from "react";
import {Colors} from "../Shared/Colors";

type Props = {
    navigation: NavigationProp<any>;
};

export const NavBar: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button
                color={Colors["primary-text-color"]}
                title="Home"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
            <Button
                color={Colors["primary-text-color"]}
                title="Trainings"
                onPress={() =>
                    navigation.navigate('Trainings')
                }
            />
            <Button
                color={Colors["primary-text-color"]}
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
        backgroundColor: Colors["divider-color"],
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