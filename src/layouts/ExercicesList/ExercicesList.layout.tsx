import {PageTitle} from "../../components/PageTitle/PageTitle";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {mainWrapper} from "../../components/Shared/SharedStyle";
import {AppTitleText} from "../../components/AppTitleText/AppTitleText";
import {CreateExerciseDto} from "../../utils/db/dto/exercise/CreateExerciseDto";
import ExercicesData from "../../../assets/datas/exercices.json";

export const ExercicesListLayout = ({exercices}: {exercices: CreateExerciseDto[]}) => {
    console.log(exercices);
    return (
        <ScrollView>
            {
                exercices.map((exercise, index) => {
                    return (
                        <TouchableOpacity>
                            <Text>{new Date(exercise.date.seconds * 1000).toLocaleDateString('fr-FR')}</Text>
                            <Text>{ExercicesData[exercise.id].name}</Text>
                            <Text>{exercise.repetions}</Text>
                            <Text>{exercise.weight}kg</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}