import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const appTitleText = StyleSheet.create({
  Title: {
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export const pageTitleText = StyleSheet.create({
  Title: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors["primary-text-color"],
    backgroundColor: "transparent",
    marginTop: 30,
  },
});

export const mainWrapper = StyleSheet.create({
  MainWrapper: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 25,
  },
});

export const mainText = StyleSheet.create({
  Secondary: {
    color: Colors["primary-text-color"],
    fontSize: 16,
  },
  Main: {
    color: Colors["primary-color"],
    fontSize: 18,
  },
});
