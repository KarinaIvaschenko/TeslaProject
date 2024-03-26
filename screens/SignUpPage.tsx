import {FC} from "react";
import stylesBase from "../styles/styles";
import TitlePages from "../components/TitlePages";
import {LinearGradient} from "expo-linear-gradient";
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import {Formik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {changeForm} from "../redux/slices/usersSignUp";
import {sendCandidateToSignUp} from "../api/signUp";
import {useTranslation} from "react-i18next";

const SignUpPage: FC<any> = ({navigation}) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const onPressGoBack = () => {
        navigation.goBack();
    };
    const onPressSettings = () => {
        navigation.navigate("SettingsPage");
    };
    const SignUpSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        telephone: Yup.string().required("Phone is required"),
        firstName: Yup.string().required("First name is required")
            .min(2, 'Too short!')
            .max(35, 'Too long!'),
        lastName: Yup.string().required("Last name is required")
            .min(2, 'Too short!')
            .max(35, 'Too long!'),
        login: Yup.string().required("Login is required")
            .min(4, 'Too short!')
            .max(30, 'Too long!'),
        password: Yup.string().required("Password is required")
            .min(7, 'Too short!')
            .max(30, 'Too long!'),
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
                <TitlePages onPressGoBack={onPressGoBack} text={t('signInPage.text.title')} onPressSettings={onPressSettings}/>
                <Formik
                    initialValues={{
                        email: "",
                        telephone: "",
                        firstName: "",
                        lastName: "",
                        login: "",
                        password: "",
                        isAdmin: true
                    }}
                    onSubmit={async (values) => {
                        try {
                            const response = await sendCandidateToSignUp(values);
                            navigation.navigate("CabinetPage");
                        } catch (error) {
                            console.error('Error while submitting form:', error);
                        }
                    }}
                    validationSchema={SignUpSchema}
                >
                    {({
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          values,
                          errors,
                          touched,
                      }) => (
                        <View style={s.inputContainer}>
                            <TextInput
                                onChangeText={(newText) => {
                                    handleChange("email")(newText)
                                    dispatch(changeForm({type: "email", value: newText}));
                                }
                                }
                                onBlur={handleBlur("email")}
                                value={values.email}
                                placeholder="Email"
                                placeholderTextColor="#acafb5"
                                style={s.input}
                            />
                            {errors.email && touched.email && (
                                <Text style={{color: "red"}}>
                                    {errors.email}
                                </Text>
                            )}
                            <TextInput
                                onChangeText={(newText) => {
                                    handleChange("telephone")(newText)
                                    dispatch(changeForm({type: "telephone", value: newText}));
                                }
                                }
                                onBlur={handleBlur("telephone")}
                                value={values.telephone}
                                placeholder="Phone"
                                placeholderTextColor="#acafb5"
                                style={s.input}
                            />
                            {errors.telephone && touched.telephone && (
                                <Text style={{color: "red"}}>
                                    {errors.telephone}
                                </Text>
                            )}
                            <TextInput
                                onChangeText={(newText) => {
                                    handleChange("firstName")(newText)
                                    dispatch(changeForm({type: "firstName", value: newText}));
                                }
                                }
                                onBlur={handleBlur("firstName")}
                                value={values.firstName}
                                placeholder="First name"
                                placeholderTextColor="#acafb5"
                                style={s.input}
                            />
                            {errors.firstName && touched.firstName && (
                                <Text style={{color: "red"}}>
                                    {errors.firstName}
                                </Text>
                            )}
                            <TextInput
                                onChangeText={(newText) => {
                                    handleChange("lastName")(newText)
                                    dispatch(changeForm({type: "lastName", value: newText}));
                                }
                                }
                                onBlur={handleBlur("lastName")}
                                value={values.lastName}
                                placeholder="Last name"
                                placeholderTextColor="#acafb5"
                                style={s.input}
                            />
                            {errors.lastName && touched.lastName && (
                                <Text style={{color: "red"}}>
                                    {errors.lastName}
                                </Text>
                            )}
                            <TextInput
                                onChangeText={(newText) => {
                                    handleChange("login")(newText)
                                    dispatch(changeForm({type: "login", value: newText}));
                                }
                                }
                                onBlur={handleBlur("login")}
                                value={values.login}
                                placeholder="Login"
                                placeholderTextColor="#acafb5"
                                style={s.input}
                            />
                            {errors.login && touched.login && (
                                <Text style={{color: "red"}}>
                                    {errors.login}
                                </Text>
                            )}
                            <TextInput
                                onChangeText={(newText) => {
                                    handleChange("password")(newText)
                                    dispatch(changeForm({type: "password", value: newText}));
                                }
                                }
                                onBlur={handleBlur("password")}
                                value={values.password}
                                placeholder="Password"
                                placeholderTextColor="#acafb5"
                                style={s.input}
                            />
                            {errors.password && touched.password && (
                                <Text style={{color: "red"}}>
                                    {errors.password}
                                </Text>
                            )}
                            <TouchableOpacity
                                onPress={() => {
                                    handleSubmit()
                                    //dispatch
                                }
                                }
                                title="Submit"
                                style={s.btn}
                            >
                                <Text style={s.btnText}>{t('signInPage.buttons.submit')}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </LinearGradient>
    );
};

const s = StyleSheet.create({
    inputContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 10,
        marginTop: 20,
    },
    input: {
        width: "100%",
        height: 40,
        color: "#fff",
        backgroundColor: "#27282A",
        padding: 0,
        paddingLeft: 10,
    },
    btn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 40,
        marginTop: 20,
        backgroundColor: "#27282A",
    },
    btnText: {
        color: "#fff",
    },
});

export default SignUpPage;
