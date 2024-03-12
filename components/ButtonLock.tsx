import { FC } from "react";
import {
    TouchableWithoutFeedback,
    Text,
    View,
    Image,
    ImageSourcePropType,
    StyleSheet,
} from "react-native";

interface IButtonLock {
    text: string;
    onPress: () => void;
    img: ImageSourcePropType;
}
const ButtonLock: FC<IButtonLock> = ({ text, onPress, img }) => {
    return (
        <View style={s.lockContainer}>
            <Text style={s.lockText}>{text}</Text>
            <TouchableWithoutFeedback onPress={onPress}>
                <Image source={img} style={s.lockImg} />
            </TouchableWithoutFeedback>
        </View>
    );
};

const s = StyleSheet.create({
    lockContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 20,
    },
    lockText: {
        textAlign: "center",
        color: "white",
        fontWeight: "600",
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.408,
        paddingHorizontal: 20,
    },
    lockImg: {
        marginTop: 7,
        width: 72,
        height: 72,
    },
});
export default ButtonLock;
