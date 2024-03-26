import {View} from "react-native";
import {TrainingPill} from "../../components/TrainingPill/TrainingPill.component";
import {AddTrainingButtonComponent} from "../../components/AddTrainingButton/AddTrainingButton.component";
export const TrainingList: React.FC = () => {
    return (
        <View style={{
            marginTop: 50,
            display: "flex",
            gap: 15,
        }}>
            <AddTrainingButtonComponent />
            <TrainingPill trainingName={"Nom de la séance"} date={"12/12/2012"} exercicesCount={12} />
            <TrainingPill trainingName={"Nom de la séance"} date={"12/12/2012"} exercicesCount={12} />
            <TrainingPill trainingName={"Nom de la séance"} date={"12/12/2012"} exercicesCount={12} />
        </View>
    )
}