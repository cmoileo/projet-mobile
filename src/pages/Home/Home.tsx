import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavBar} from "../../components/NavBar/NavBar";
import {NavigationProp} from "@react-navigation/native";
import {AddButtonComponent} from "../../components/AddButton/AddButton.component";
import {RemoveButton} from "../../components/RemoveButton/RemoveButton.component";
import Svg from 'react-native-svg';
import {EditButton} from "../../components/EditButton/EditButton.component";
import {InputTextComponent} from "../../components/InputText/InputText.component";
import {TrainingPill} from "../../components/TrainingPill/TrainingPill.component";

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
                <InputTextComponent />
                <TrainingPill />
                <RemoveButton onTap={handleAddButtonTap} />
                <EditButton onTap={handleAddButtonTap} />
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
