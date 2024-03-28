import { View, StyleSheet, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";

type Props = {
  data: any;
};

const ChartWeight: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>Poids / Entraînement</Text>
      <BarChart
        data={data}
        frontColor={"#3782FF"}
        barWidth={22}
        barBorderRadius={4}
      />
    </View>
  );
};

export default ChartWeight;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
});
