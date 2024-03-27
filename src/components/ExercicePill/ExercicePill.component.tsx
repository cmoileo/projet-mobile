import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../Shared/Colors";
import { NavigationProp } from "@react-navigation/native";

type Props = {
  title: string;
  repetition_number: number;
  index: number;
  rest_time?: string;
  is_stats_pill?: boolean;
  id?: string;
  navigation?: NavigationProp<any>;
};

export const ExercicePillComponent: React.FC<Props> = ({
  title,
  repetition_number,
  index,
  rest_time,
  is_stats_pill,
  id,
  navigation,
}) => {
  const handleNavigate = () => {
    if (navigation) {
      navigation.navigate("ExerciceStats", { id });
    }
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={is_stats_pill ? handleNavigate : undefined}
    >
      <View style={styles.wrapper}>
        <Text style={{ color: Colors["primary-color"] }}>{title}</Text>
        {is_stats_pill ? (
          <Text>Réalisé {repetition_number} fois</Text>
        ) : (
          <Text>
            {repetition_number} rep. - {rest_time}
          </Text>
        )}
      </View>
      {!is_stats_pill && <Text style={styles.indexText}>#{index}</Text>}
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
