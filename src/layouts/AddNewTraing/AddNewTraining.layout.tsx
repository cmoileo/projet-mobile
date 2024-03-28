import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { InputTextComponent } from "../../components/InputText/InputText.component";
import { Colors } from "../../components/Shared/Colors";
import { ExercicePillComponent } from "../../components/ExercicePill/ExercicePill.component";
import React, { useContext, useState } from "react";
import { AddExerciceModalComponent } from "../../components/AddExerciceModal/AddExerciceModal.component";
import create from "../../utils/db/entities/training/operations/create";
import { TrainingContext, UserContext } from "../../App";
import readByUserId from "../../utils/db/entities/training/operations/read";
import { NavigationProp } from "@react-navigation/native";
import { CreateExerciseDto } from "../../utils/db/dto/exercise/CreateExerciseDto";
import ExercicesData from "../../../assets/datas/exercices.json";

export const AddNewTrainingLayout = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const setTrainings = useContext(TrainingContext).setTrainings;
  const userId = useContext(UserContext);
  const [chosenExercices, setChosenExercices] = useState<
    CreateExerciseDto[] | null
  >(null);
  const [isModalVisible, setIsModalVisible] = useState<"none" | "flex">("none");
  const [trainingName, setTrainingName] = useState<string>("");

  const handleCreateExercice = async () => {
    if (chosenExercices == null || typeof userId !== "string") return;
    await create({
      exercises: chosenExercices,
      name: trainingName,
      userId: userId,
      date: new Date(),
    });
    const trainingsDoc = await readByUserId(userId);
    setTrainings(trainingsDoc);
    navigation.navigate("MainHome");
  };
  return (
    <>
      <View style={styles.container}>
        <InputTextComponent setTrainingName={setTrainingName} />
        <TouchableOpacity
            onPress={() => setIsModalVisible("flex")}
            style={styles.addButton}
        >
          <Text>+ Ajouter un exercice</Text>
        </TouchableOpacity>
        <View style={styles.wrapper}>
          <ScrollView>
              {chosenExercices &&
                chosenExercices.map((exercice, index) => {
                  return (
                    <ExercicePillComponent
                      key={index}
                      title={
                        ExercicesData[
                          ExercicesData.findIndex((ex) => ex.id == exercice.id) +
                            1
                        ].name
                      }
                      index={index}
                      chosenExercices={chosenExercices}
                      setChosenExercices={setChosenExercices}
                    />
                  );
                })}
          </ScrollView>
        </View>
        <TouchableOpacity
            style={styles.createButton}
            onPress={handleCreateExercice}
        >
          <Text
              style={{
                color: Colors["text-primary-color"],
                fontSize: 18,
                fontWeight: "bold",
              }}
          >
            CRÉER
          </Text>
        </TouchableOpacity>
      </View>
      <AddExerciceModalComponent
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        chosenExercices={chosenExercices}
        setChosenExercices={setChosenExercices}
      />
    </>
  );
};

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
    overflow: "scroll",
    height: 250,
  },
  addButton: {
    width: "100%",
    paddingVertical: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: Colors["primary-color"],
    borderRadius: 10,
  },
  createButton: {
    backgroundColor: Colors["primary-color"],
    padding: 20,
    textAlign: "center",
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
});
