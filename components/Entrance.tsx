import {FC} from "react";
import {TouchableWithoutFeedback, Image, StyleSheet, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';

interface IEntrance {
    onPress: () => void;
}

const Settings: FC<IEntrance> = ({onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={s.settingsContainer}>
            <Image
                source={require("../assets/entranceBtn.png")}
                style={s.settingsImg}
            />
            <Ionicons name="enter-outline"
                      size={24}
                      color="rgba(235, 235, 245, 0.60))"
                      style={s.settingsIcon}/>
            </View>
        </TouchableWithoutFeedback>
    );
};

const s = StyleSheet.create({
    settingsContainer: {
        position: "relative",
        alignSelf: "flex-end",
    },
    settingsImg: {
        alignSelf: "flex-end",
        width: 100,
        height: 100,
    },
    settingsIcon: {
        position: "absolute",
        top: 31,
        left: 31
    }
});

export default Settings;