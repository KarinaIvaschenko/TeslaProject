import { FC, useEffect } from "react";
import stylesBase from "../styles/styles";
import TitlePages from "../components/TitlePages";
import { LinearGradient } from "expo-linear-gradient";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
    driverForm,
    getToken,
    getTokenUser,
} from "../redux/slices/usersSignIn";
import { getCandidate } from "../api/signIn";
import { getCurrentUser, getUser } from "../redux/slices/currentUser";
import { instance } from "../api/instance";
import { setToken } from "../utils/tokens";

const SignInPage: FC<any> = ({ navigation }) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.signIn.token);

    useEffect(() => {
        if (token.length > 0) {
            setToken(token);
            dispatch<any>(getCurrentUser());
            navigation.navigate("CabinetPage");
        }
    }, [token]);

    const onPressGoBack = () => {
        navigation.goBack();
    };
    const SignInSchema = Yup.object().shape({
        loginOrEmail: Yup.string().required("Login or Email is required"),
        password: Yup.string().required("Password is required"),
    });
    return (
        <LinearGradient
            colors={["#292C31", "#292C31", "#2D2C31"]}
            locations={[0, 0.7287, 1]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={stylesBase.containerGradient}
        >
            <View style={stylesBase.container}>
                <TitlePages onPressGoBack={onPressGoBack} text="CABINET" />
                <Formik
                    initialValues={{
                        loginOrEmail: "",
                        password: "",
                    }}
                    onSubmit={async (values) => {
                        dispatch<any>(getTokenUser(values));
                    }}
                    validationSchema={SignInSchema}
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
                                    handleChange("loginOrEmail")(newText);
                                    dispatch(
                                        driverForm({
                                            type: "loginOrEmail",
                                            value: newText,
                                        })
                                    );
                                }}
                                onBlur={handleBlur("loginOrEmail")}
                                value={values.loginOrEmail}
                                placeholder="Login or Email"
                                placeholderTextColor="#acafb5"
                                style={s.input}
                            />
                            {errors.loginOrEmail && touched.loginOrEmail && (
                                <Text style={{ color: "red" }}>
                                    {errors.loginOrEmail}
                                </Text>
                            )}
                            <TextInput
                                onChangeText={(newText) => {
                                    handleChange("password")(newText);
                                    dispatch(
                                        driverForm({
                                            type: "password",
                                            value: newText,
                                        })
                                    );
                                }}
                                onBlur={handleBlur("password")}
                                value={values.password}
                                placeholder="Password"
                                placeholderTextColor="#acafb5"
                                style={s.input}
                            />
                            {errors.password && touched.password && (
                                <Text style={{ color: "red" }}>
                                    {errors.password}
                                </Text>
                            )}
                            <TouchableOpacity
                                onPress={handleSubmit}
                                title="Submit"
                                style={s.btn}
                            >
                                <Text style={s.btnText}>Submit</Text>
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

export default SignInPage;
