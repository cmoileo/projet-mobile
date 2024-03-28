import { View, Text, StyleSheet } from "react-native";
import Chart from "./Chart";

type Props = {
  data: any;
};

const ChartBreakTime: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>Temps de pause / Entraînement</Text>
      <Chart data={data} />
    </View>
  );
};

export default ChartBreakTime;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
});
