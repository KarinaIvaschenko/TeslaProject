import {Image, StyleSheet, TouchableWithoutFeedback} from "react-native";
import {FC} from "react";

interface IButtonBack {
    onPress: () => void;
}

const ButtonBack: FC<IButtonBack> = ({onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Image source={require("../assets/backButton.png")} style={s.buttonBackImg}/>
        </TouchableWithoutFeedback>
    );
};

const s = StyleSheet.create({
    buttonBackImg: {
        width: 72,
        height: 72,
    }
});

export default ButtonBack;