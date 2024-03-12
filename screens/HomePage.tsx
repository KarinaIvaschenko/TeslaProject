import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Image,
} from "react-native";
import { FC } from "react";
import { FontAwesome } from "@expo/vector-icons";
import stylesBase from "../styles/styles";
import { LinearGradient } from "expo-linear-gradient";
import OptionsCar from "../components/OptionsCar";
import ControlContent from "../components/ControlContent";

const HomePage: FC<any> = ({ navigation }) => {
    const onPressLock = () => {
        navigation.navigate("OpenCarPage");
    };
    const onPressClimate = () => {
        navigation.navigate("ClimateCarPage");
    };
    const onPressCharge = () => {
        navigation.navigate("ChargeCarPage");
    };
    const onPressControl = () => {
        navigation.navigate("ControlCarPage");
    };
    const onPressCabinet = () => {
        navigation.navigate("CabinetPage");
    };
    return (
        <LinearGradient
            colors={["#292C31", "#292C31", "#2D2C31"]}
            locations={[0, 0.7287, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={stylesBase.containerGradient}
        >
            <View style={s.infoCar}>
                <View style={s.aboutCar}>
                    <Text style={s.carName}>Tesla</Text>
                    <View style={s.batteryCar}>
                        <FontAwesome
                            name="battery-3"
                            size={20}
                            color="#808080"
                        />
                        <Text style={s.batteryText}>187 km</Text>
                    </View>
                </View>
                <TouchableWithoutFeedback style={s.accountContainer} onPress={onPressCabinet}>
                    <Image
                        source={require("../assets/acount.png")}
                        style={s.accountBtn}
                    />
                </TouchableWithoutFeedback>
            </View>
            <Image
                source={require("../assets/carHome.png")}
                style={s.carHomeImg}
            />
            <View style={s.optionCar}>
                <OptionsCar
                    onPressLock={onPressLock}
                    onPressClimate={onPressClimate}
                    onPressCharge={onPressCharge}
                    onPressControl={onPressControl}
                />
            </View>
            <ControlContent
                onPressLock={onPressLock}
                onPressClimate={onPressClimate}
                onPressCharge={onPressCharge}
                onPressControl={onPressControl}
            />
        </LinearGradient>
    );
};

const s = StyleSheet.create({
    infoCar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 25,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 10,
    },
    aboutCar: { gap: 8 },
    carName: {
        color: "#FFF",
        fontSize: 28,
        fontWeight: "700",
        letterSpacing: 0.36,
    },
    batteryCar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    batteryText: {
        color: "#808080",
        fontSize: 17,
        fontWeight: "600",
        lineHeight: 22,
        letterSpacing: -0.408,
    },
    accountContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    accountBtn: {
        width: 72,
        height: 72,
    },

    carHomeImg: {
        width: 388,
        height: 254,
        marginBottom: 20,
    },
    optionCar: {
        marginBottom: 55,
    },
});
export default HomePage;
