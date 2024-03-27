import {Text, View} from "react-native";
import {mainWrapper} from "../../components/Shared/SharedStyle";
import {AppTitleText} from "../../components/AppTitleText/AppTitleText";
import {PageTitle} from "../../components/PageTitle/PageTitle";
import {AddNewTrainingLayout} from "../../layouts/AddNewTraing/AddNewTraining.layout";
import {NavBar} from "../../components/NavBar/NavBar";
import {NavigationProp, RouteProp} from "@react-navigation/native";
import readOneByUserId from "../../utils/db/entities/training/operations/readOne";
import React, {useEffect, useState} from "react";
import {UserContext} from "../../App";

export const TrainingPage = ({navigation, route}: {navigation: NavigationProp<any>, route: RouteProp<any>}) => {
    const [training, setTraining] = useState({});
    const trainingId = route.params?.trainingId;
    const userId = React.useContext(UserContext);

    useEffect(() => {
        const getSingleTraining = async () => {
            if (!userId) return;
            const trainingByName: any = await readOneByUserId(trainingId);
            setTraining(trainingByName);
        }
        getSingleTraining();
    }, []);

    return (
        <>
            <View style={mainWrapper.MainWrapper}>
                <AppTitleText />
                <PageTitle label={"🗒Training"} />
                <Text>{trainingId}</Text>
            </View>
            <NavBar navigation={navigation} />
        </>
    )
}