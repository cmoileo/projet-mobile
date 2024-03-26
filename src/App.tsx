import { StatusBar } from "expo-status-bar";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import db from "./utils/db/config/firebase";

export default function App() {
  useEffect(() => {
    (async () => {
      const testDocs = await getDocs(collection(db, "test"));
      const data = testDocs.docs.map((doc) => doc.data());
      console.log(data);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
