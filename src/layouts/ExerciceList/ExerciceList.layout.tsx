import { StyleSheet, View } from "react-native";
import { ExercicePillComponent } from "../../components/ExercicePill/ExercicePill.component";
import { NavigationProp } from "@react-navigation/native";

type Props = {
  navigation: NavigationProp<any>;
};
const ExerciceListLayout: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {[1, 2, 3].map((index: number) => {
          return (
            <ExercicePillComponent
              key={index}
              title={"Développé couché"}
              index={index}
              repetition_number={8}
              is_stats_pill
              id="1"
              navigation={navigation}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ExerciceListLayout;

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
