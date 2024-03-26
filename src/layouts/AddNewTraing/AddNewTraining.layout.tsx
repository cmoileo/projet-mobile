import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {InputTextComponent} from "../../components/InputText/InputText.component";
import {Colors} from "../../components/Shared/Colors";
import {ExercicePillComponent} from "../../components/ExercicePill/ExercicePill.component";

export const AddNewTrainingLayout = () => {
    return (
       <View style={styles.container}>
           <InputTextComponent />
           <View style={styles.wrapper}>
               <TouchableOpacity style={styles.addButton}>
                   <Text>+ Ajouter un exercice</Text>
               </TouchableOpacity>
               {
                     [1, 2, 3].map((index: number) => {
                          return (
                              <ExercicePillComponent title={"Développé couché"} index={index} repetition_number={8} rest_time={"3min30"} />
                          )
                     })
               }
           </View>
       </View>
    );
}

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
    }
})