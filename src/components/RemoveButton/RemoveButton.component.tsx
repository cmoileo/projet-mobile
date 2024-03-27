import {View} from "react-native";
import { Colors } from "../Shared/Colors";
import React from "react";
import {SvgXml} from "react-native-svg";
import {buttonStyles} from "../Shared/ButtonStyle";

type PropTypes = {
    onTap: () => void
}

export const RemoveButton: React.FC<PropTypes> = ({onTap}) => {
    return (
        <View style={buttonStyles.button} onTouchEnd={onTap}>
            <SvgXml xml={xml} width="50%" height="50%" />
        </View>
    );
}

const xml = `<svg width=\"80px\" height=\"80px\" viewBox=\"0 0 1024 1024\" fill="${Colors["text-primary-color"]}" class=\"icon\"  version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M32 241.6c-11.2 0-20-8.8-20-20s8.8-20 20-20l940 1.6c11.2 0 20 8.8 20 20s-8.8 20-20 20L32 241.6zM186.4 282.4c0-11.2 8.8-20 20-20s20 8.8 20 20v688.8l585.6-6.4V289.6c0-11.2 8.8-20 20-20s20 8.8 20 20v716.8l-666.4 7.2V282.4z\" fill=${Colors["text-primary-color"]} /><path d=\"M682.4 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM367.2 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM524.8 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM655.2 213.6v-48.8c0-17.6-14.4-32-32-32H418.4c-18.4 0-32 14.4-32 32.8V208h-40v-42.4c0-40 32.8-72.8 72.8-72.8H624c40 0 72.8 32.8 72.8 72.8v48.8h-41.6z\" fill=${Colors["text-primary-color"]} /></svg>`