import {View} from "react-native";
import {TimerPicker } from "react-native-timer-picker";
import {Colors} from "../Shared/Colors";

export const ChronoComponent = ({ chronoValue, setChronoValue}: { chronoValue: any, setChronoValue: (value: any) => void}) => {
    return (
        <View>
            <TimerPicker
                padWithNItems={1}
                hideHours
                minuteLabel="min"
                secondLabel="sec"
                onDurationChange={(duration) => {
                    setChronoValue(duration)
                }}
                styles={{
                    theme: "light",
                    backgroundColor: Colors["text-primary-color"],
                    pickerItem: {
                        fontSize: 20,
                    },
                    pickerLabel: {
                        fontSize: 16,
                        right: -20,
                        color: Colors["primary-text-color"],
                        marginTop: 0,
                    },
                    pickerLabelContainer: {
                        width: 60,
                        backgroundColor: Colors["text-primary-color"],
                        gap: 10,
                    },
                    pickerItemContainer: {
                        width: 150,
                        gap: 0,
                        height: 50,
                    },
                }}
            />
        </View>
    );
}