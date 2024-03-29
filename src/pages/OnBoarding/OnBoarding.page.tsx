import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavBar } from "../../components/NavBar/NavBar";
import { NavigationProp } from "@react-navigation/native";
import { Colors } from "../../components/Shared/Colors";

type Props = {
  navigation: NavigationProp<any>;
};

const OnBoarding: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
            style={{ width: 300, height: 280 }}
            source={require("../../../assets/onboarding.png")} />
        <Image source={require("../../../assets/logo-sporty.png")} />
        <Text style={styles.textDescription}>
          Enregistres tes entraînement et vois ton évolution dans le temps
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("MainHome")}
          style={styles.button}
        >
          <Text style={styles.textButton}>Goooo !</Text>
        </TouchableOpacity>
      </View>
      <NavBar navigation={navigation} />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 30,
  },
  textDescription: {
    fontSize: 18,
    textAlign: "center",
    color: "#9C9D9D",
  },
  button: {
    backgroundColor: Colors["grey"],
    padding: 20,
    textAlign: "center",
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    minWidth: "100%",
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors["text-primary-color"],
  },
});
