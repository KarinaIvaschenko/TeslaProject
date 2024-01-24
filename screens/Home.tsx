import {FC} from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableWithoutFeedback
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

const Home: FC<any> = ({navigation}) => {
    return (
        <View style={s.container}>
            <LinearGradient
                colors={["#292C31", "#000", "#000", "#292929"]}
                locations={[0, 0.3009, 0.5735, 1]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={s.container}
            >
                <View style={s.settingsContainer}>
                    <TouchableWithoutFeedback style={s.settingsContainerC1}>
                        <Image source={require("../assets/button.png")} style={s.settingsContainerC1Img}/>
                    </TouchableWithoutFeedback>
                    <View style={s.settingsContainerC2}>
                        <Image source={require("../assets/carDark.png")} style={s.settingsContainerC2Img}/>
                    </View>
                    <LinearGradient
                        colors={["#17171C", "#18191B"]}
                        locations={[0.0368, 0.4642]}
                        style={s.settingsContainerC3}>
                        <View style={s.settingsContainerC3Inner}>
                            <Text style={s.settingsContainerC3InnerText}>Unlock</Text>
                            <TouchableWithoutFeedback style={s.settingsContainerC3InnerBox}>
                                <Image source={require("../assets/buttonLock.png")} style={s.settingsContainerC3InnerBoxImg}/>
                            </TouchableWithoutFeedback>

                        </View>
                    </LinearGradient>
                </View>
            </LinearGradient>
        </View>
    );
};

const s = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        marginTop: 25 // test
    },
    settingsContainer: {
        paddingTop: 25, // test
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    settingsContainerC1: {
        width: 72,
        height: 72,
    },
    settingsContainerC1Img: {
        alignSelf: "flex-end",
        width: 72,
        height: 72,
    },
    settingsContainerC2: {
        width: 245,
        height: 163,
        marginTop: 132
    },
    settingsContainerC2Img: {
        width: "100%",
        height: "100%",
    },
    settingsContainerC3: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        marginTop: 217
    },
    settingsContainerC3Inner: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 20,
        paddingHorizontal: 20,
    },
    settingsContainerC3InnerText: {
        textAlign: "center",
        color: "white",
        fontWeight: "600",
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.408
},
    settingsContainerC3InnerBox: {
        width: 72,
        height: 72,
    },
    settingsContainerC3InnerBoxImg: {
        marginTop: 7,
        width: 72,
        height: 72,
    }

});

export default Home;
