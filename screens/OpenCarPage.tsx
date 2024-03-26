import {LinearGradient} from "expo-linear-gradient";
import {View, Image, StyleSheet} from "react-native";
import stylesBase from "../styles/styles";
import TitlePages from "../components/TitlePages";
import {FC, useEffect, useState} from "react";
import ButtonLock from "../components/ButtonLock";
import {useDispatch, useSelector} from "react-redux";
import {toggleStatusOpenCar} from "../redux/slices/statusCar";
import {RootStateType} from "../redux/store";
import {useTranslation} from "react-i18next";
import {Audio} from "expo-av";

const OpenCarPage: FC<any> = ({navigation}) => {
    const {t} = useTranslation();
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
    const onPressSettings = () => {
        navigation.navigate("SettingsPage");
    };

    const [sound, setSound] = useState();

    const playSoundOpen = async () => {
        const {sound} = await Audio.Sound.createAsync(require('../assets/open.mp3')
        );
        setSound(sound);
        await sound.playAsync();
    }

    const playSoundClose = async () => {
        const {sound} = await Audio.Sound.createAsync(require('../assets/close.mp3')
        );
        setSound(sound);
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

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
                            text={t('openCarPage.text.title')}
                            onPressSettings={onPressSettings}/>

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
                                        onPress={() => {
                                            onPressOpenCar()
                                            playSoundOpen();
                                        }
                                        }
                                        img={require("../assets/buttonLock.png")}
                                        text={t('openCarPage.buttons.lockBtn')}
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
                                        onPress={() => {
                                            onPressOpenCar()
                                            playSoundClose();
                                        }
                                        }
                                        img={require("../assets/lock.png")}
                                        text={t('openCarPage.buttons.unlockBtn')}
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
