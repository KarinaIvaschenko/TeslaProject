import {View, Text, StyleSheet, Image} from "react-native";
import stylesBase from "../styles/styles";
import {LinearGradient} from "expo-linear-gradient";
import {FC} from "react";
import TitlePages from "../components/TitlePages";
import {useSelector} from "react-redux";
import {RootStateType} from "../redux/store";
import {useTranslation} from "react-i18next";

const ChargeCarPage: FC<any> = ({navigation}) => {
    const {t} = useTranslation();
    const params = useSelector((state: RootStateType) => state.charge);

    const onPressGoBack = () => {
        navigation.goBack();
    };
    const onPressSettings = () => {
        navigation.navigate("SettingsPage");
    };
    return (
        <LinearGradient
            colors={["#292C31", "#292C31", "#2D2C31"]}
            locations={[0, 0.7287, 1]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={stylesBase.containerGradient}
        >
            <View style={stylesBase.container}>
                <TitlePages onPressGoBack={onPressGoBack}
                            text={t('chargeCarPage.text.title')}
                            onPressSettings={onPressSettings}/>
                <Image
                    source={require("../assets/carCharge.png")}
                    style={s.carImage}
                />
                <View style={s.chargeText}>
                    <Text style={s.chargeTextCounter}>{params.percent}</Text>
                    <Text style={s.chargeTextPercent}>%</Text>
                </View>
                <View style={s.carChargeContainer}>
                    <Image
                        style={s.batteryBase}
                        source={require("../assets/icons/batteryBase.png")}
                    />
                    <Image
                        style={[
                            s.batteryCharge,
                            {width: `${params.percent}%`},
                        ]}
                        source={require("../assets/icons/batteryCharge.png")}
                    />
                </View>

                <View style={s.carBatteryVolume}>
                    <View style={s.carBatteryRange}>
                        <View style={s.carBatteryRangeMin}></View>
                        <Text style={s.carBatteryVolumeMin}>0%</Text>
                    </View>
                    <View style={s.carBatteryRange}>
                        <View style={s.carBatteryRangeMid}></View>
                        <Text style={s.carBatteryVolumeMid}>50%</Text>
                    </View>
                    <View style={s.carBatteryRange}>
                        <View style={s.carBatteryRangeMax}></View>
                        <Text style={s.carBatteryVolumeMax}>100%</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};
const s = StyleSheet.create({
    carImage: {
        width: 322,
        height: 221,
        marginTop: 80,
        marginBottom: 50,
    },
    chargeText: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 30,
    },
    chargeTextCounter: {
        fontSize: 20,
        fontWeight: "600",
        color: "white",
    },
    chargeTextPercent: {
        color: "rgba(235, 235, 245, 0.60))",
        fontSize: 16,
        fontWeight: "400",
    },
    carChargeContainer: {
        width: 275,
        height: 41,
        position: "relative",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 20,
    },
    batteryBase: {
        width: "100%",
        height: "100%",
    },
    batteryCharge: {
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
    },
    carBatteryVolume: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontWeight: "400",
        fontSize: 13,
        lineHeight: 22,
        marginTop: 8,
    },
    carBatteryRange: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    carBatteryRangeMin: {
        width: 2,
        height: 10,
        backgroundColor: "rgba(235, 235, 245, 0.6)",
        marginLeft: 25,
    },
    carBatteryRangeMid: {
        width: 2,
        height: 10,
        backgroundColor: "rgba(235, 235, 245, 0.8)",
    },
    carBatteryRangeMax: {
        width: 2,
        height: 10,
        backgroundColor: "#fff",
        marginRight: 25,
    },

    carBatteryVolumeMin: {
        paddingLeft: 25,

        color: "rgba(235, 235, 245, 0.6)",
    },
    carBatteryVolumeMid: {
        color: "rgba(235, 235, 245, 0.8)",
    },
    carBatteryVolumeMax: {
        paddingRight: 10,
        color: "#fff",
    },
});

export default ChargeCarPage;
