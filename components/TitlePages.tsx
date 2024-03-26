import {View, Text, StyleSheet} from "react-native";
import ButtonBack from "./ButtonBack";
import Settings from "./Settings";
import {FC} from "react";

interface ITitlePages {
    onPressGoBack: () => void;
    text: () => void | string;
}

const TitlePages: FC<ITitlePages> = ({onPressGoBack, text, onPressSettings}) => {
    return (
        <View style={s.titleContainer}>
            <ButtonBack onPress={onPressGoBack}/>
            <Text style={s.titleText}>{text}</Text>
            <Settings onPress={onPressSettings}/>
        </View>
    );
};

const s = StyleSheet.create({
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 25,
    },
    titleText: {
        color: "white",
        fontSize: 20,
        fontWeight: "600",
    },
});
export default TitlePages;
