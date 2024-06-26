import {mainWrapper} from "../../components/Shared/SharedStyle";
import {AppTitleText} from "../../components/AppTitleText/AppTitleText";
import {PageTitle} from "../../components/PageTitle/PageTitle";
import {NavBar} from "../../components/NavBar/NavBar";
import {NavigationProp, RouteProp} from "@react-navigation/native";
import readOneByUserId from "../../utils/db/entities/training/operations/readOne";
import React, {useEffect, useState} from "react";
import {UserContext} from "../../App";
import {ExercicesListLayout} from "../../layouts/ExercicesList/ExercicesList.layout";
import {CreateTrainingDto} from "../../utils/db/dto/training/CreateTrainingDto";
import {View} from "react-native";

export const TrainingPage = ({navigation, route}: {navigation: NavigationProp<any>, route: RouteProp<any>}) => {
    const [training, setTraining] = useState<CreateTrainingDto | null>(null);
    const [pageTitle, setPageTitle] = useState("🗒Training");
    const trainingId = route.params?.trainingId;
    const userId = React.useContext(UserContext);

    useEffect(() => {
        const getSingleTraining = async () => {
            if (!userId) return;
            const trainingByName: any = await readOneByUserId(trainingId);
            setPageTitle(`🗒${trainingByName.name}`)
            setTraining(trainingByName);
        }
        getSingleTraining();
    }, []);

    return (
        <>
            <View style={mainWrapper.MainWrapper}>
                <AppTitleText />
                <PageTitle label={pageTitle} />
                {
                    // @ts-ignore
                    training && <ExercicesListLayout exercices={training.exercises} trainingId={training.training_id} training={training} />
                }
            </View>
            <NavBar navigation={navigation} />
        </>
    )
}