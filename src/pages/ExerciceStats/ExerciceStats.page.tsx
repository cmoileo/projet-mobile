import { View } from "react-native";
import { mainWrapper } from "../../components/Shared/SharedStyle";
import { AppTitleText } from "../../components/AppTitleText/AppTitleText";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { NavBar } from "../../components/NavBar/NavBar";
import { NavigationProp } from "@react-navigation/native";
import { useEffect } from "react";
import ExerciceStatsLayout from "../../layouts/ExerciceStats/ExerciceStats.layout";

type Props = {
  navigation: NavigationProp<any>;
  route: any;
};

const ExerciceStats: React.FC<Props> = ({ navigation, route }) => {
  return (
    <>
      <View style={mainWrapper.MainWrapper}>
        <AppTitleText />
        <PageTitle label={"🔍 Mes Stats"} />
        <ExerciceStatsLayout exerciceId={route.params.id} />
      </View>
      <NavBar navigation={navigation} />
    </>
  );
};

export default ExerciceStats;
