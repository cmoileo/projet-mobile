import {Text} from "react-native";
import {appTitleText, pageTitleText} from "../Shared/SharedStyle";

type Props = {
    label: string;
}

export const PageTitle: React.FC<Props> = ({label}) => {
    return (
        <Text style={pageTitleText.Title}>{label}</Text>
    );
}