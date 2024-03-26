import { FC } from "react";
import { TouchableWithoutFeedback, Image, StyleSheet } from "react-native";

interface ISettings {
    onPress: () => void;
}

const Settings: FC<ISettings> = ({ onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Image
                source={require("../assets/button.png")}
                style={s.settingsImg}
            />
        </TouchableWithoutFeedback>
    );
};

const s = StyleSheet.create({
    settingsImg: {
        alignSelf: "flex-end",
        width: 72,
        height: 72,
    },
});

export default Settings;
