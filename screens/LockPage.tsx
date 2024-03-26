import { FC } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ButtonLock from "../components/ButtonLock";
import stylesBase from "../styles/styles";
import { useDispatch } from "react-redux";
import { toggleStatusApp } from "../redux/slices/statusCar";
import {useTranslation} from "react-i18next";

const LockPage: FC<any> = ({ navigation }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const onPress = () => {
        navigation.navigate("UnlockPage");
        dispatch(toggleStatusApp());
    };
    return (
        <LinearGradient
            colors={["#292C31", "#000", "#000", "#292929"]}
            locations={[0, 0.3009, 0.5735, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={stylesBase.containerGradient}
        >
            <View style={stylesBase.container}>
                <View style={stylesBase.wrapper}>
                    <View style={s.carDark}>
                        {/*<Text style={{color: "white"}}>{t('lockPage.buttons.lockBtn')}</Text>*/}
                        <Image
                            source={require("../assets/carDark.png")}
                            style={s.carDarkImg}
                        />
                    </View>
                    <LinearGradient
                        colors={["#17171C", "#18191B"]}
                        locations={[0.0368, 0.4642]}
                        style={s.unlockGradient}
                    >
                        <ButtonLock
                            text={t('lockPage.buttons.lockBtn')}
                            onPress={onPress}
                            img={require("../assets/buttonLock.png")}
                        />
                    </LinearGradient>
                </View>
            </View>
        </LinearGradient>
    );
};

const s = StyleSheet.create({
    carDark: {
        width: 245,
        height: 163,
        marginTop: 217,
    },
    carDarkImg: {
        width: "100%",
        height: "100%",
    },
    unlockGradient: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        marginTop: 230,
    },
    unlockContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 20,
    },
    unlockText: {
        textAlign: "center",
        color: "white",
        fontWeight: "600",
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.408,
        paddingHorizontal: 20,
    },
    unlockImg: {
        marginTop: 7,
        width: 72,
        height: 72,
    },
});

export default LockPage;
