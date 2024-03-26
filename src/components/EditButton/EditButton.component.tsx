import {View} from "react-native";
import { Colors } from "../Shared/Colors";
import React from "react";
import {SvgXml} from "react-native-svg";
import {buttonStyles} from "../Shared/ButtonStyle";

type PropTypes = {
    onTap: () => void
}

export const EditButton: React.FC<PropTypes> = ({onTap}) => {
    return (
        <View style={buttonStyles.button} onTouchEnd={onTap}>
            <SvgXml xml={xml} width="100%" height="60%" />
        </View>
    );
}

const xml = `<svg width="500px" height="500px" viewBox="-2.56 0 89.725 89.725" xmlns="http://www.w3.org/2000/svg">
  <g id="Group_11" data-name="Group 11" transform="translate(-1020.3 -668.175)">
    <path id="Path_53" data-name="Path 53" d="M1066.1,682.8l-34.8,34.8a3.858,3.858,0,0,0-1.1,2.2l-.8,10.1a2.488,2.488,0,0,0,2.8,2.8l9.8-.8a3.857,3.857,0,0,0,2.2-1.1l35-35a3.041,3.041,0,0,0,.3-4.3l-9.1-9.1A3.052,3.052,0,0,0,1066.1,682.8Z" fill="none" stroke=${Colors["text-primary-color"]} stroke-miterlimit="10" stroke-width="4"/>
    <path id="Path_54" data-name="Path 54" d="M1079.6,690.2l-7.8-7.8a3.684,3.684,0,0,1,0-5.3l5.8-5.8a3.684,3.684,0,0,1,5.3,0l7.8,7.8a3.684,3.684,0,0,1,0,5.3l-5.8,5.8A3.869,3.869,0,0,1,1079.6,690.2Z" fill="none" stroke=${Colors["text-primary-color"]} stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/>
  </g>
</svg>`