import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Chart from "../../components/Chart/Chart";

type Props = {
  exerciceId: string;
};

const ExerciceStatsLayout: React.FC<Props> = ({ exerciceId }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Chart />
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
