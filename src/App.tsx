import MyStack from "./routes/Routes";
import { NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import storage from "./AsyncStorage/AsyncStorage.util";
import { customAlphabet } from "nanoid/non-secure";

export const UserContext = React.createContext<string | null>(null);

export default function App() {
  const [userId, setUserId] = React.useState<string | null>(null);

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
        } else {
          const newId = customNanoid();
          await storage.save({ key: "userId", data: newId });
          setUserId(newId);
        }
      } catch (error) {
        const newId = customNanoid();
        await storage.save({ key: "userId", data: newId });
        setUserId(newId);
      }
    };

    fetchUserId();
  }, []);

  return (
    <UserContext.Provider value={userId}>
      <NativeBaseProvider>
        <MyStack />
      </NativeBaseProvider>
    </UserContext.Provider>
  );
}
