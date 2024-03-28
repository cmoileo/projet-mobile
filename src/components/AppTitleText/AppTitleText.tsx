import { appTitleText } from "../Shared/SharedStyle";
import { Image, Text } from "react-native";

export const AppTitleText = () => {
  return (
    <Image
      source={require("../../../assets/logo-sporty.png")}
      style={appTitleText.Title}
    />
  );
};
