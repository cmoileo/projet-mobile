import {View} from "react-native";
import {TimerPicker } from "react-native-timer-picker";
import {Colors} from "../Shared/Colors";

export const ChronoComponent = () => {


    return (
        <View>
            <TimerPicker
                padWithNItems={3}
                hideHours
                minuteLabel="min"
                secondLabel="sec"
                styles={{
                    theme: "light",
                    backgroundColor: Colors["text-primary-color"],
                    pickerItem: {
                        fontSize: 34,
                    },
                    pickerLabel: {
                        fontSize: 26,
                        right: -20,
                        color: Colors["primary-text-color"],
                    },
                    pickerLabelContainer: {
                        width: 60,
                    },
                    pickerItemContainer: {
                        width: 150,
                    },
                }}
            />
        </View>
    );
}