import { FC, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Settings from "../components/Settings";
import ButtonLock from "../components/ButtonLock";
import stylesBase from "../styles/styles";
import { useDispatch } from "react-redux";
import { toggleStatusApp } from "../redux/slices/statusCar";

const UnlockPage: FC<any> = ({ navigation }) => {
    const [pressImg, setPressImg] = useState(false);
    const dispatch = useDispatch();
    const onPress = () => {
        navigation.navigate("LockPage");
        dispatch(toggleStatusApp());
    };
    const handleImagePress = () => {
        setPressImg(!pressImg);
    };
    const handleSettings = () => {
        navigation.navigate("HomePage");
    };
    return (
        <LinearGradient
            colors={["#2A2D32", "#161719"]}
            locations={[0, 0.9917]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={stylesBase.containerGradient}
        >
            <View style={stylesBase.container}>
                <View style={stylesBase.wrapper}>
                    <Settings onPress={handleSettings} />
                    <View style={s.carLight}>
                        <TouchableOpacity onPress={handleImagePress}>
                            {pressImg ? (
                                <View>
                                    <Text style={s.carLightText}>Model 3</Text>
                                    <Image
                                        source={require("../assets/carLightBig.png")}
                                        style={s.carLightBigImg}
                                    />
                                </View>
                            ) : (
                                <Image
                                    source={require("../assets/carLight.png")}
                                    style={s.carLightImg}
                                />
                            )}
                        </TouchableOpacity>
                    </View>
                    <LinearGradient
                        colors={["#18191B", "#18191B"]}
                        locations={[0.0368, 0.4642]}
                        style={s.unlockGradient}
                    >
                        <ButtonLock
                            text="Lock"
                            onPress={onPress}
                            img={require("../assets/lock.png")}
                        />
                    </LinearGradient>
                </View>
            </View>
        </LinearGradient>
    );
};

const s = StyleSheet.create({
    carLight: {
        // marginTop: 130,
        // marginBottom: 172,
    },
    carLightText: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 40,
        fontWeight: "700",
        lineHeight: 41,
        marginTop: 40,
    },
    carLightBigImg: {
        width: 407,
        height: 330,
        marginTop: 50,
        marginBottom: 50,
    },
    carLightImg: {
        width: 256,
        height: 208,
        marginTop: 130,
        marginBottom: 172,
    },
    unlockGradient: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 9,
            height: 9,
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 10,
    },
});

export default UnlockPage;
