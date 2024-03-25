import {StyleSheet, Text, View} from "react-native";
import {NavBar} from "../../components/NavBar/NavBar";
import {NavigationProp} from "@react-navigation/native";

type Props = {
    navigation: NavigationProp<any>;
};
export const Training: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Training page !</Text>
            <NavBar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});