import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Chart from "../../components/Chart/Chart";
import { UserContext } from "../../App";
import ChartWeight from "../../components/Chart/ChartWeight";

type Props = {
  exerciceId: string;
};

const ExerciceStatsLayout: React.FC<Props> = ({ exerciceId }) => {
  const [dataWeight, setDataWeight] = React.useState([]);
  const context = React.useContext(UserContext);
  const userId = context;
  React.useEffect(() => {}, []);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ChartWeight data={dataWeight} />
      </View>
    </View>
  );
};

export default ExerciceStatsLayout;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
});
