import { View, Text, StyleSheet } from "react-native";
import Chart from "./Chart";

type Props = {
  data: any;
};

const ChartRepetition: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>Nombre de répétitions / Entraînement</Text>
      <Chart data={data} />
    </View>
  );
};

export default ChartRepetition;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
});
