import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavBar} from "../../components/NavBar/NavBar";
import {NavigationProp} from "@react-navigation/native";
import {AddButtonComponent} from "../../components/AddButton/AddButton.component";
import window from "@react-navigation/native/lib/typescript/src/__mocks__/window";

type Props = {
    navigation: NavigationProp<any>;
};

export const Home: React.FC<Props> = ({navigation}) => {
    const handleAddButtonTap = () => {
        console.log("Add button tapped");
    }
    return (
        <>
            <View style={styles.container}>
                <Text>Home page !</Text>
                <StatusBar style="auto"/>
                <AddButtonComponent onTap={handleAddButtonTap} />
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
