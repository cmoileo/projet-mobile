import {View, StyleSheet, TouchableOpacity} from "react-native";
import {NavigationProp} from "@react-navigation/native";
import React from "react";
import {Colors} from "../Shared/Colors";
import {SvgXml} from "react-native-svg";

type Props = {
    navigation: NavigationProp<any>;
};

export const NavBar: React.FC<Props> = ({navigation}) => {
    return (
        <View style={[styles.container, styles.shadowProp]}>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('AddNewTraining')
                }
            >
                <SvgXml xml={xml_dumbell} width="40" height="40" />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.homeButton}
                onPress={() =>
                    navigation.navigate('Home')
                }
            >
                <SvgXml xml={xml_home} width="40" height="40" />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Home')
                }
            >
                <SvgXml xml={xml_graph} width="40" height="40" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: 'center',
        paddingBottom: 30,
        paddingTop: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 50,
        justifyContent: 'space-between',
    },
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    homeButton: {
        backgroundColor: Colors["primary-color"],
        borderRadius: 100,
        padding: 15,
        position: 'absolute',
        left: '52%',
        top: "-50%",
    }
})

const xml_dumbell = `<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5_76)">
<path d="M3.33334 20.5H5.00001" stroke=${Colors["secondary-text-color"]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 13.8333H6.66667C6.22464 13.8333 5.80072 14.0089 5.48816 14.3215C5.17559 14.6341 5 15.058 5 15.5V25.5C5 25.942 5.17559 26.366 5.48816 26.6785C5.80072 26.9911 6.22464 27.1667 6.66667 27.1667H10" stroke=${Colors["secondary-text-color"]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 12.1667V28.8333C10 29.2754 10.1756 29.6993 10.4882 30.0118C10.8007 30.3244 11.2246 30.5 11.6667 30.5H13.3333C13.7754 30.5 14.1993 30.3244 14.5118 30.0118C14.8244 29.6993 15 29.2754 15 28.8333V12.1667C15 11.7246 14.8244 11.3007 14.5118 10.9882C14.1993 10.6756 13.7754 10.5 13.3333 10.5H11.6667C11.2246 10.5 10.8007 10.6756 10.4882 10.9882C10.1756 11.3007 10 11.7246 10 12.1667Z" stroke=${Colors["secondary-text-color"]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 20.5H25" stroke=${Colors["secondary-text-color"]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 12.1667V28.8333C25 29.2754 25.1756 29.6993 25.4882 30.0118C25.8007 30.3244 26.2246 30.5 26.6667 30.5H28.3333C28.7754 30.5 29.1993 30.3244 29.5118 30.0118C29.8244 29.6993 30 29.2754 30 28.8333V12.1667C30 11.7246 29.8244 11.3007 29.5118 10.9882C29.1993 10.6756 28.7754 10.5 28.3333 10.5H26.6667C26.2246 10.5 25.8007 10.6756 25.4882 10.9882C25.1756 11.3007 25 11.7246 25 12.1667Z" stroke=${Colors["secondary-text-color"]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30 13.8333H33.3333C33.7754 13.8333 34.1993 14.0089 34.5118 14.3215C34.8244 14.6341 35 15.058 35 15.5V25.5C35 25.942 34.8244 26.366 34.5118 26.6785C34.1993 26.9911 33.7754 27.1667 33.3333 27.1667H30" stroke=${Colors["secondary-text-color"]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.6667 20.5H35" stroke=${Colors["secondary-text-color"]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_5_76">
<rect width="40" height="40" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
`

const xml_home = `<svg width="40" height="40" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_11_253)">
<path d="M8.33333 20.5H5L20 5.5L35 20.5H31.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.33331 20.5V32.1667C8.33331 33.0507 8.6845 33.8986 9.30962 34.5237C9.93474 35.1488 10.7826 35.5 11.6666 35.5H28.3333C29.2174 35.5 30.0652 35.1488 30.6903 34.5237C31.3155 33.8986 31.6666 33.0507 31.6666 32.1667V20.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 35.5V25.5C15 24.6159 15.3512 23.7681 15.9763 23.143C16.6014 22.5178 17.4493 22.1667 18.3333 22.1667H21.6667C22.5507 22.1667 23.3986 22.5178 24.0237 23.143C24.6488 23.7681 25 24.6159 25 25.5V35.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_11_253">
<rect width="40" height="40" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
`

const xml_graph = `<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_11_267)">
<path d="M6.66669 27.1667L16.6667 15.5L25 23.8333L33.3334 13.8333" stroke=${Colors["secondary-text-color"]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.3333 23.8333C23.3333 24.2754 23.5089 24.6993 23.8215 25.0118C24.134 25.3244 24.558 25.5 25 25.5C25.442 25.5 25.8659 25.3244 26.1785 25.0118C26.4911 24.6993 26.6666 24.2754 26.6666 23.8333C26.6666 23.3913 26.4911 22.9674 26.1785 22.6548C25.8659 22.3423 25.442 22.1667 25 22.1667C24.558 22.1667 24.134 22.3423 23.8215 22.6548C23.5089 22.9674 23.3333 23.3913 23.3333 23.8333Z" stroke=${Colors["secondary-text-color"]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15.5C15 15.942 15.1756 16.366 15.4882 16.6785C15.8007 16.9911 16.2246 17.1667 16.6667 17.1667C17.1087 17.1667 17.5326 16.9911 17.8452 16.6785C18.1577 16.366 18.3333 15.942 18.3333 15.5C18.3333 15.058 18.1577 14.6341 17.8452 14.3215C17.5326 14.0089 17.1087 13.8333 16.6667 13.8333C16.2246 13.8333 15.8007 14.0089 15.4882 14.3215C15.1756 14.6341 15 15.058 15 15.5Z" stroke=${Colors["secondary-text-color"]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 27.1667C5 27.6087 5.17559 28.0326 5.48816 28.3452C5.80072 28.6577 6.22464 28.8333 6.66667 28.8333C7.10869 28.8333 7.53262 28.6577 7.84518 28.3452C8.15774 28.0326 8.33333 27.6087 8.33333 27.1667C8.33333 26.7246 8.15774 26.3007 7.84518 25.9882C7.53262 25.6756 7.10869 25.5 6.66667 25.5C6.22464 25.5 5.80072 25.6756 5.48816 25.9882C5.17559 26.3007 5 26.7246 5 27.1667Z" stroke=${Colors["secondary-text-color"]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M31.6667 13.8333C31.6667 14.2754 31.8423 14.6993 32.1548 15.0118C32.4674 15.3244 32.8913 15.5 33.3334 15.5C33.7754 15.5 34.1993 15.3244 34.5119 15.0118C34.8244 14.6993 35 14.2754 35 13.8333C35 13.3913 34.8244 12.9674 34.5119 12.6548C34.1993 12.3423 33.7754 12.1667 33.3334 12.1667C32.8913 12.1667 32.4674 12.3423 32.1548 12.6548C31.8423 12.9674 31.6667 13.3913 31.6667 13.8333Z" stroke=${Colors["secondary-text-color"]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_11_267">
<rect width="40" height="40" fill=${Colors["secondary-text-color"]} transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
`