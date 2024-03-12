import { LinearGradient } from "expo-linear-gradient";
import { View, Image, StyleSheet } from "react-native";
import stylesBase from "../styles/styles";
import TitlePages from "../components/TitlePages";
import { FC } from "react";
import ButtonLock from "../components/ButtonLock";
import { useDispatch, useSelector } from "react-redux";
import { toggleStatusOpenCar } from "../redux/slices/statusCar";
import { RootStateType } from "../redux/store";

const OpenCarPage: FC<any> = ({ navigation }) => {
    const openCar: boolean = useSelector(
        (state: RootStateType) => state.car.statusOpenCar
    );

    const dispatch = useDispatch();
    const onPressOpenCar = () => {
        dispatch(toggleStatusOpenCar());
    };
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
                <TitlePages text="Status Car" onPressGoBack={onPressGoBack} />

                {!openCar ? (
                    <View style={s.openCarContainer}>
                        <View style={s.carImage}>
                            <Image
                                style={s.closedCar}
                                source={require("../assets/closedCar.png")}
                            />
                        </View>
                        <View style={stylesBase.wrapper}>
                            <View style={s.buttonLockCar}>
                                <LinearGradient
                                    colors={["#18191B", "#18191B"]}
                                    locations={[0.0368, 0.4642]}
                                    style={s.unlockGradient}
                                >
                                    <ButtonLock
                                        onPress={onPressOpenCar}
                                        img={require("../assets/buttonLock.png")}
                                        text="Open car"
                                    />
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                ) : (
                    <View style={s.openCarContainer}>
                        <View style={s.carImage}>
                            <Image
                                style={s.openedCar}
                                source={require("../assets/openedCar.png")}
                            />
                        </View>
                        <View style={stylesBase.wrapper}>
                            <View style={s.buttonLockCar}>
                                <LinearGradient
                                    colors={["#18191B", "#18191B"]}
                                    locations={[0.0368, 0.4642]}
                                    style={s.unlockGradient}
                                >
                                    <ButtonLock
                                        onPress={onPressOpenCar}
                                        img={require("../assets/lock.png")}
                                        text="Close car"
                                    />
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                )}
            </View>
        </LinearGradient>
    );
};

const s = StyleSheet.create({
    openCarContainer: {
        paddingTop: 120,
    },
    carImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 200,
    },
    closedCar: {
        width: 350,
        height: 180,
        marginTop: 40,
    },
    openedCar: {
        width: 400,
        height: 200,
    },
    buttonLockCar: {
        marginTop: 150,
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

export default OpenCarPage;
