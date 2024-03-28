import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../Shared/Colors";
import { NavigationProp } from "@react-navigation/native";

type Props = {
  title: string;
  made_number: number;
  index: number;
  id: string;
  navigation: NavigationProp<any>;
};

export const ExercicePillStats: React.FC<Props> = ({
  title,
  made_number,
  index,
  id,
  navigation,
}) => {
  const handleNavigate = () => {
    if (navigation) {
      navigation.navigate("ExerciceStats", { id });
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.wrapper}>
        <Text style={{ color: Colors["primary-color"] }}>{title}</Text>
        <Text>Réalisé {made_number} fois</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: Colors["divider-color"],
  },
  indexText: {
    fontSize: 30,
    color: Colors["primary-color"],
    fontWeight: "bold",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
});
