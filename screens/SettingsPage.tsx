import {FC, useState} from "react";
import stylesBase from "../styles/styles";
import TitlePages from "../components/TitlePages";
import {LinearGradient} from "expo-linear-gradient";
import {
    Image,
    StyleSheet,
    TouchableOpacity,
    View,
    Text
} from "react-native";
import {useTranslation} from "react-i18next";

const SettingsPage: FC<any> = ({navigation}) => {

    const {t, i18n} = useTranslation();
    const onPressGoBack = () => {
        navigation.goBack();
    };
    const onPressEnglish = () => {
        i18n.changeLanguage("en")
    }
    const onPressGerman = () => {
        i18n.changeLanguage("de")
    }
    const onPressUkraine = () => {
        i18n.changeLanguage("ua")
    }

    return (
        <LinearGradient
            colors={["#292C31", "#292C31", "#2D2C31"]}
            locations={[0, 0.7287, 1]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={stylesBase.containerGradient}
        >
            <View style={stylesBase.container}>
                <TitlePages onPressGoBack={onPressGoBack} text={t('settingsPage.text.title')}/>
                <View style={s.imgContainer}>
                    <Image
                        source={require("../assets/SignUpLogo.png")}
                        style={s.usersImage}
                    />
                </View>
                <View style={s.chooseContainer}>
                    <Text style={s.chooseContainerText}>
                        {t('settingsPage.text.body')}
                    </Text>
                    <TouchableOpacity onPress={onPressEnglish}>
                        <LinearGradient
                            colors={["#18191B", "#18191B"]}
                            locations={[0.0368, 0.4642]}
                            style={s.btnGradient}
                        >
                            <Text style={s.btnText}>English</Text>
                            <Image
                                source={require("../assets/icons/united-states.png")}
                                style={s.flag}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPressGerman}>
                        <LinearGradient
                            colors={["#18191B", "#18191B"]}
                            locations={[0.0368, 0.4642]}
                            style={s.btnGradient}
                        >
                            <Text style={s.btnText}>Deutsch</Text>
                            <Image
                                source={require("../assets/icons/germany.png")}
                                style={s.flag}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPressUkraine}>
                        <LinearGradient
                            colors={["#18191B", "#18191B"]}
                            locations={[0.0368, 0.4642]}
                            style={s.btnGradient}
                        >
                            <Text style={s.btnText}>Українська</Text>
                            <Image
                                source={require("../assets/icons/ukraine.png")}
                                style={s.flag}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    );
};

const s = StyleSheet.create({
    imgContainer: {
        marginTop: 50,
        marginBottom: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    usersImage: {
        width: "100%",
    },
    chooseContainer: {
        gap: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    chooseContainerText: {
        fontSize: 18,
        color: "rgba(235, 235, 245, 0.80))"
    },
    btnGradient: {
        height: 50,
        width: 200,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
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
    btnText: {
        color: "rgba(235, 235, 245, 0.60))"
    },
    flag: {
        width: 20,
        height: 20
    }
});

export default SettingsPage;