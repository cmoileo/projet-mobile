import { StyleSheet, Text, View } from 'react-native';
import {NavBar} from "../../components/NavBar/NavBar";
import {NavigationProp} from "@react-navigation/native";
import {mainWrapper} from "../../components/Shared/SharedStyle";
import {AppTitleText} from "../../components/AppTitleText/AppTitleText";
import {PageTitle} from "../../components/PageTitle/PageTitle";
import {TrainingList} from "../../layouts/TrainingLists/TrainingList.layout";

type Props = {
    navigation: NavigationProp<any>;
};

export const HomePage: React.FC<Props> = ({navigation}) => {
    const handleAddButtonTap = () => {
        console.log("Add button tapped");
    }
    return (
        <>
            <View style={mainWrapper.MainWrapper}>
                <AppTitleText />
                <PageTitle label={"🏋️Mes Trainings"} />
                <TrainingList />
            </View>
            <NavBar navigation={navigation} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
