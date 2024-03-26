import {StyleSheet} from "react-native";
import {Colors} from "./Colors";

export const appTitleText = StyleSheet.create({
    Title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors["primary-text-color"],
        backgroundColor: 'transparent',
        width: '100%',
        textAlign: 'center',
        marginTop: 30,
    }
})

export const pageTitleText = StyleSheet.create({
    Title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors["primary-text-color"],
        backgroundColor: 'transparent',
        marginTop: 30,
    }
})

export const mainWrapper = StyleSheet.create({
    MainWrapper: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingHorizontal: 25,
    }
})

export const mainText = StyleSheet.create({
    Secondary: {
        color: Colors["primary-text-color"],
        fontSize: 18,
    },
    Main: {
        color: Colors["primary-color"],
        fontSize: 25,
    }
})