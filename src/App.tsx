import MyStack from "./routes/Routes";
import { NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import storage from "./AsyncStorage/AsyncStorage.util";
import { nanoid } from "nanoid";
import { customAlphabet } from "nanoid/non-secure";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;
import readByUserId from "./utils/db/entities/training/operations/read";

export const UserContext = React.createContext<string | null>(null);
export const TrainingContext = React.createContext<DocumentData>([]);

export default function App() {
  const [userId, setUserId] = React.useState<string | null>(null);
  const [trainings, setTrainings] = useState<DocumentData>([]);

  useEffect(() => {
    const fetchUserId = async () => {
      const customNanoid = customAlphabet(
        "abcdefghijklmnopqrstuvwxyz0123456789",
        50
      );
      try {
        const existingUserId = await storage.load({ key: "userId" });
        if (existingUserId) {
          setUserId(existingUserId);
          await fetchTrainings(existingUserId);
        } else {
          const newId = customNanoid();
          await storage.save({ key: "userId", data: newId });
          setUserId(newId);
          await fetchTrainings(newId);
        }
      } catch (error) {
        const newId = customNanoid();
        await storage.save({ key: "userId", data: newId });
        setUserId(newId);
        await fetchTrainings(newId);
      }
    };

    const fetchTrainings = async (id: string) => {
      try {
        if (!id) return;
        const trainingsDoc = await readByUserId(id);
        setTrainings(trainingsDoc);
      } catch (error) {
        console.log("Error fetching trainings", error);
      }
    };

    fetchUserId();
  }, []);

  return (
    <UserContext.Provider value={userId}>
      <TrainingContext.Provider value={{ trainings, setTrainings }}>
        <NativeBaseProvider>
          <MyStack />
        </NativeBaseProvider>
      </TrainingContext.Provider>
    </UserContext.Provider>
  );
}
