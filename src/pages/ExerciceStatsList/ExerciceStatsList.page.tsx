import { Text, View } from "react-native";
import { AppTitleText } from "../../components/AppTitleText/AppTitleText";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { NavBar } from "../../components/NavBar/NavBar";
import { NavigationProp } from "@react-navigation/native";
import { mainWrapper } from "../../components/Shared/SharedStyle";
import ExerciceListLayout from "../../layouts/ExerciceList/ExerciceList.layout";

type Props = {
  navigation: NavigationProp<any>;
};

const ExerciceStatsList: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <View style={mainWrapper.MainWrapper}>
        <AppTitleText />
        <PageTitle label={"🔍 Mes Exercices"} />
        <ExerciceListLayout navigation={navigation} />
      </View>
      <NavBar navigation={navigation} />
    </>
  );
};

export default ExerciceStatsList;
