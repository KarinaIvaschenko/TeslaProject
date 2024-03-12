import { FC } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IOptionsCar {
    onPressLock: () => void;
    onPressClimate: () => void;
    onPressCharge: () => void;
    onPressControl: () => void;
}

const OptionsCar: FC<IOptionsCar> = ({
    onPressLock,
    onPressClimate,
    onPressCharge,
    onPressControl,
}) => {
    return (
        <View style={s.optionContainer}>
            <TouchableWithoutFeedback onPress={onPressLock}>
                <FontAwesome name="lock" size={35} color="#808080" />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={onPressClimate}>
                <MaterialCommunityIcons name="fan" size={33} color="#808080" />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={onPressCharge}>
                <MaterialCommunityIcons
                    name="lightning-bolt"
                    size={34}
                    color="#808080"
                />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={onPressControl}>
                <Image
                    source={require("../assets/openTrunk.png")}
                    style={s.carTrunk}
                />
            </TouchableWithoutFeedback>
        </View>
    );
};

const s = StyleSheet.create({
    optionContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 36,
        borderRadius: 50,
        backgroundColor: "#27282A",
        width: 330,
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 30,
        paddingBottom: 30,
    },
    carTrunk: {
        width: 60,
        height: 60,
    },
});
export default OptionsCar;
