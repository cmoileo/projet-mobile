import {View} from "react-native";
import {TrainingPill} from "../../components/TrainingPill/TrainingPill.component";

export const TrainingList: React.FC = () => {
    return (
        <View style={{
            marginTop: 50,
            display: "flex",
            gap: 15,
        }}>
            <TrainingPill />
            <TrainingPill />
            <TrainingPill />
        </View>
    )
}