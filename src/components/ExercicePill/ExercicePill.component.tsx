import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../Shared/Colors";
import { SvgXml } from "react-native-svg";
import { CreateExerciseDto } from "../../utils/db/dto/exercise/CreateExerciseDto";

type Props = {
  title: string;
  index: number;
  chosenExercices: CreateExerciseDto[] | null;
  setChosenExercices: React.Dispatch<
    React.SetStateAction<CreateExerciseDto[] | null>
  >;
};

export const ExercicePillComponent: React.FC<Props> = ({
  title,
  index,
  chosenExercices,
  setChosenExercices,
}) => {
  const handleDeleteChosenExercice = (index: number): void => {
    if (chosenExercices === null) return;
    const updatedChosenExercices = chosenExercices?.filter(
      (_, i) => i !== index
    );
    setChosenExercices(updatedChosenExercices);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{ color: Colors["primary-color"] }}>{title}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Text style={styles.indexText}>#{index + 1}</Text>
        <TouchableOpacity onPress={() => handleDeleteChosenExercice(index)}>
          <SvgXml xml={xml} width="20" height="20" />
        </TouchableOpacity>
      </View>
    </View>
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

const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_41_857)">
<path d="M18 6L6 18" stroke="#3782FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6L18 18" stroke="#3782FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_41_857">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`;
