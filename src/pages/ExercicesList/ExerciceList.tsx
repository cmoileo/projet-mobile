import {StyleSheet, Text, View} from "react-native";
import {NavigationProp} from "@react-navigation/native";
import {NavBar} from "../../components/NavBar/NavBar";

type Props = {
    navigation: NavigationProp<any>;
};

export const ExerciceList: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>ExerciceList page !</Text>
            <NavBar navigation={navigation} />
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