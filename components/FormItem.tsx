import {StyleSheet, Text, TextInput, View} from "react-native";
import {editUser} from "../redux/slices/currentUser";
import {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import EditButton from "./ButtonEdit";

const FormItem: FC<any> = ({handleChange, name, placeholderName, error, handleBlur, touched}) => {
    const dispatch = useDispatch()
    const [editForm, setEditForm] = useState(false)
    const value = useSelector(state => state.user[name])
    return (
        <View style={s.userTextContainer}>
            <Text style={[s.userText, s.userTitle]}>
                {placeholderName}:
            </Text>
            {!editForm ? (
                <Text
                    style={[s.userText, s.userBody]}
                >
                    {value}
                </Text>
            ) : (
                <View
                    style={s.userBody}>
                    <TextInput
                        onChangeText={(newText) => {
                            handleChange(
                                name
                            )(newText);
                            dispatch(
                                editUser({
                                    type: name,
                                    value: newText,
                                })
                            );
                        }}
                        onBlur={handleBlur(
                            name
                        )}
                        value={value}
                        placeholder={placeholderName}
                        placeholderTextColor="#acafb5"
                        style={[
                            s.userTextEdit,
                            s.userBody,
                        ]}
                    />
                    {error &&
                        touched && (
                            <Text
                                style={{
                                    color: "red",
                                }}
                            >
                                {error}
                            </Text>
                        )}
                </View>
            )}
            <EditButton onPress={() => setEditForm(prev => !prev)}/>
        </View>
    );
}

const s = StyleSheet.create({
    userTextContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    userText: {
        color: "rgba(235, 235, 245, 0.8)",
        fontSize: 16,
    },
    userTitle: {
        width: 90,
    },
    userBody: {
        flex: 1,
    },
    userTextEdit: {
        color: "rgba(235, 235, 245, 1)",
        fontSize: 16,
    }
})

export default FormItem;