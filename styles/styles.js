import { StyleSheet } from "react-native";

const stylesBase = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 25, // test
    },
    containerGradient: {
        width: "100%",
        height: "100%",
        paddingTop: 25,
        paddingBottom: 25,
    },
    wrapper: {
        paddingTop: 25, // test
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
});
export default stylesBase;
