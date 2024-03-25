import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavBar} from "../../components/NavBar/NavBar";
import {NavigationProp} from "@react-navigation/native";

type Props = {
    navigation: NavigationProp<any>;
};

export const Home: React.FC<Props> = ({navigation}) => {
    return (
        <>
            <View style={styles.container}>
                <Text>Home page !</Text>
                <StatusBar style="auto"/>
            </View>
            <NavBar navigation={navigation} />
        </>
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
