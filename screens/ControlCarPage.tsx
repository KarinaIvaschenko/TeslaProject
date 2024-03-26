import {Image, View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {useTranslation} from "react-i18next";
import {Audio} from "expo-av";
import stylesBase from "../styles/styles";
import {LinearGradient} from "expo-linear-gradient";
import TitlePages from "../components/TitlePages";
import {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../redux/store";
import {
    toggleStatusHoodOpen,
    toggleStatusRoofOpen,
    toggleStatusTrunkOpen,
} from "../redux/slices/statusDoors";

const ControlCarPage: FC<any> = ({navigation}) => {
    const {t} = useTranslation();
    const statusHood = useSelector(
        (state: RootStateType) => state.doors.statusHood
    );
    const statusTrunk = useSelector(
        (state: RootStateType) => state.doors.statusTrunk
    );
    const statusRoof = useSelector(
        (state: RootStateType) => state.doors.statusRoof
    );
    const dispatch = useDispatch();

    const toggleHood = () => {
        dispatch(toggleStatusHoodOpen());
        if (statusHood) {
            playSoundClose();
        } else {
            playSoundOpen();
        }
    };
    const toggleTrunk = () => {
        dispatch(toggleStatusTrunkOpen());
        if (statusTrunk) {
            playSoundClose();
        } else {
            playSoundOpen();
        }
    };

    const toggleRoof = () => {
        dispatch(toggleStatusRoofOpen());
        if (statusRoof) {
            playSoundClose();
        } else {
            playSoundOpen();
        }
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
                <TitlePages
                    onPressGoBack={onPressGoBack}
                    text={t('controlCarPage.text.title')}
                    onPressSettings={onPressSettings}
                />
                <View style={s.imgContainer}>
                    <Image
                        source={require("../assets/CarFromTop.png")}
                        style={s.carImage}
                    />
                    <TouchableOpacity
                        style={s.carHood}
                        onPress={toggleHood}
                    >
                        {statusHood ? (
                            <Text style={s.carHoodText}>{t('controlCarPage.text.close')}</Text>
                        ) : (
                            <Text style={s.carHoodText}>{t('controlCarPage.text.open')}</Text>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={s.carTrunk}
                        onPress={toggleTrunk}
                    >
                        {statusTrunk ? (
                            <Text style={s.carTrunkText}>{t('controlCarPage.text.close')}</Text>
                        ) : (
                            <Text style={s.carTrunkText}>{t('controlCarPage.text.open')}</Text>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={s.carRoof}
                        onPress={toggleRoof}
                    >
                        {statusRoof ? (
                            <Text style={s.carRoofText}>{t('controlCarPage.text.close')}</Text>
                        ) : (
                            <Text style={s.carRoofText}>{t('controlCarPage.text.open')}</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

const s = StyleSheet.create({
    imgContainer: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    carImage: {
        width: 250,
        height: 550,
        marginTop: 50,
    },
    carHood: {
        position: "absolute",
        top: "85%",
        left: "50%",
        marginLeft: -10
    },
    carHoodText: {
        color: "rgba(235, 235, 245, 0.80))",
    },
    carTrunk: {
        position: "absolute",
        top: "17%",
        left: "50%",
        marginLeft: -10
    },
    carTrunkText: {
        color: "rgba(235, 235, 245, 0.80))",
    },
    carRoof: {
        position: "absolute",
        top: "50%",
        left: "50%",
        padding: -10
    },
    carRoofText: {
        color: "rgba(235, 235, 245, 0.80))",
    },
});

export default ControlCarPage;
