import { View, Text, StyleSheet, Image } from "react-native";
import stylesBase from "../styles/styles";
import { LinearGradient } from "expo-linear-gradient";
import { FC } from "react";
import ClimateParamsAc from "../components/climate/ClimateParamsAc";
import ClimateParamsFan from "../components/climate/ClimateParamsFan";
import ClimateParamsHeat from "../components/climate/ClimateParamsHeat";
import ClimateParamsAuto from "../components/climate/ClimateParamsAuto";
import TitlePages from "../components/TitlePages";
import { useSelector } from "react-redux";
import { RootStateType } from "../redux/store";

const ClimateCarPage: FC<any> = ({ navigation }) => {
    const params = useSelector((state: RootStateType) => state.climate);
    const onPressGoBack = () => {
        navigation.goBack();
    };
    return (
        <LinearGradient
            colors={["#292C31", "#292C31", "#2D2C31"]}
            locations={[0, 0.7287, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={stylesBase.containerGradient}
        >
            <View style={stylesBase.container}>
                <TitlePages onPressGoBack={onPressGoBack} text="CLIMATE" />
                <View style={s.climateRangeContainer}>
                    <Image
                        source={require("../assets/icons/climateRange.png")}
                        style={s.climateRangeImg}
                    />
                    {params.ac.status === "on" && (
                        <Text style={s.climateRangeText}>
                            {params.ac.value}
                        </Text>
                    )}
                    {params.fan.status === "on" && (
                        <Text style={s.climateRangeText}>
                            {params.fan.value}
                        </Text>
                    )}
                    {params.heat.status === "on" && (
                        <Text style={s.climateRangeText}>
                            {params.heat.value}
                        </Text>
                    )}
                    {params.auto.status === "on" && (
                        <Text style={s.climateRangeText}>
                            {params.auto.value}
                        </Text>
                    )}
                </View>
                <View style={s.climateParams}>
                    <ClimateParamsAc />
                    <ClimateParamsFan />
                    <ClimateParamsHeat />
                    <ClimateParamsAuto />
                </View>
            </View>
        </LinearGradient>
    );
};
const s = StyleSheet.create({
    climateContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    climateText: {
        color: "white",
        fontSize: 20,
        fontWeight: "600",
    },
    climateRangeContainer: {
        position: "relative",
        paddingTop: 110,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    climateParams: {
        display: "flex",
        flexDirection: "column",
        rowGap: 30,
    },
    climateRangeImg: {
        width: 193,
        height: 193,
    },
    climateRangeText: {
        position: "absolute",
        top: 175,
        left: 138,
        fontWeight: "400",
        fontSize: 48,
        textAlign: "center",
        color: "#5c5c62",
    },
});

export default ClimateCarPage;
