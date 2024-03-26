import {Button, View} from "react-native";
import { Colors } from "../Shared/Colors";
import React from "react";
import { buttonStyles } from "../Shared/ButtonStyle";

type PropTypes = {
    onTap: () => void
}

export const AddButtonComponent: React.FC<PropTypes> = ({onTap}) => {
    return (
        <View style={buttonStyles.button}>
            <Button
                title="+"
                onPress={onTap}
                color={Colors["text-primary-color"]}
            />
        </View>
    );
}