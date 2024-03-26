import {FC} from "react";
import stylesBase from "../styles/styles";
import TitlePages from "../components/TitlePages";
import {LinearGradient} from "expo-linear-gradient";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {resetToken} from "../redux/slices/usersSignIn";
import {resetData, updateCurrentUser} from "../redux/slices/currentUser";
import FormItem from "../components/FormItem";
import {useTranslation} from "react-i18next";

const CabinetPage: FC<any> = ({navigation}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.signIn.token);
    const userInfo = useSelector((state) => state.user);

    const onPressGoBack = () => {
        navigation.goBack();
    };
    const onPressSignIn = () => {
        navigation.navigate("SignInPage");
    };
    const onPressSignUp = () => {
        navigation.navigate("SignUpPage");
    };
    const onPressSettings = () => {
        navigation.navigate("SettingsPage");
    };
    const CabinetSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        telephone: Yup.string().required("Phone is required"),
        firstName: Yup.string()
            .required("First name is required")
            .min(2, "Too short!")
            .max(35, "Too long!"),
        lastName: Yup.string()
            .required("Last name is required")
            .min(2, "Too short!")
            .max(35, "Too long!"),
        login: Yup.string()
            .required("Login is required")
            .min(4, "Too short!")
            .max(30, "Too long!"),
    });

    return (
        <LinearGradient
            colors={["#292C31", "#292C31", "#2D2C31"]}
            locations={[0, 0.7287, 1]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={stylesBase.containerGradient}
        >
            <View style={stylesBase.container}>
                <TitlePages onPressGoBack={onPressGoBack} text={t('cabinetPage.text.title')}
                            onPressSettings={onPressSettings}/>
                <View style={s.imgContainer}>
                    <Image
                        source={require("../assets/SignUpLogo.png")}
                        style={s.usersImage}
                    />
                </View>
                {token === "" ? (
                    <View>
                        <TouchableOpacity
                            style={s.btnContainer}
                            onPress={onPressSignIn}
                        >
                            <Text style={s.btnText}>{t('cabinetPage.buttons.signIn')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={s.btnContainer}
                            onPress={onPressSignUp}
                        >
                            <Text style={s.btnText}>{t('cabinetPage.buttons.signUp')}</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={s.userWrapper}>
                        <Formik
                            initialValues={{
                                email: userInfo.email,
                                telephone: userInfo.telephone,
                                firstName: userInfo.firstName,
                                lastName: userInfo.lastName,
                                login: userInfo.login,
                            }}
                            onSubmit={async () => {
                                dispatch(updateCurrentUser(userInfo));
                            }}
                            validationSchema={CabinetSchema}
                        >
                            {({
                                  handleChange,
                                  handleBlur,
                                  handleSubmit,
                                  errors,
                                  touched,
                              }) => (
                                <>
                                    {userInfo.forms.map(item => (
                                        <FormItem
                                            key={item}
                                            handleChange={handleChange}
                                            name={item}
                                            placeholderName={item}
                                            error={errors[item]}
                                            handleBlur={handleBlur}
                                            touched={touched[item]}
                                        />
                                    ))

                                    }
                                    <TouchableOpacity
                                        style={s.btnContainer}
                                        onPress={handleSubmit}
                                        title="Submit"
                                    >
                                        <Text style={s.btnText}>Save</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={s.btnContainer}
                                        onPress={() => {
                                            dispatch(resetToken());
                                            dispatch(resetData());
                                        }}
                                    >
                                        <Text style={s.btnText}>Log out</Text>
                                    </TouchableOpacity>
                                </>
                            )}
                        </Formik>
                    </View>
                )}
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
    btnContainer: {
        width: "100%",
        height: 50,
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#27282A",
    },
    btnText: {
        color: "#fff",
    },
    userWrapper: {
        display: "flex",
        justifyContent: "center",
        gap: 15,
    }
});

export default CabinetPage;