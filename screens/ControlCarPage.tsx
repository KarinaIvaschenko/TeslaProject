import {Image, View, StyleSheet, Text, TouchableOpacity} from "react-native";
import stylesBase from "../styles/styles";
import {LinearGradient} from "expo-linear-gradient";
import TitlePages from "../components/TitlePages";
import {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../redux/store";
import {toggleStatusHoodOpen, toggleStatusRoofOpen, toggleStatusTrunkOpen} from "../redux/slices/statusDoors";


const ControlCarPage: FC<any> = ({navigation}) => {
    const statusHood = useSelector((state: RootStateType) => state.doors.statusHood);
    const statusTrunk = useSelector((state: RootStateType) => state.doors.statusTrunk);
    const statusRoof = useSelector((state: RootStateType) => state.doors.statusRoof);
    const dispatch = useDispatch();

    const toggleHood = () => {
        dispatch(toggleStatusHoodOpen())
    }
    const toggleTrunk = () => {
        dispatch(toggleStatusTrunkOpen())
    }
    const toggleRoof = () => {
        dispatch(toggleStatusRoofOpen())
    }
    const onPressGoBack = () => {
        navigation.goBack();
    };
    return (
        <LinearGradient
            colors={["#292C31", "#292C31", "#2D2C31"]}
            locations={[0, 0.7287, 1]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={stylesBase.containerGradient}
        >
            <View style={stylesBase.container}>
                <TitlePages onPressGoBack={onPressGoBack} text="DOORS CONTROL"/>
                <View style={s.imgContainer}>
                    <Image
                        source={require("../assets/CarFromTop.png")}
                        style={s.carImage}
                    />
                    <TouchableOpacity style={s.carHood} onPress={toggleHood}>
                        {statusHood ? <Text style={s.carHoodText}>Close</Text> :
                            <Text style={s.carHoodText}>Open</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={s.carTrunk} onPress={toggleTrunk}>
                        {statusTrunk ? <Text style={s.carTrunkText}>Close</Text> :
                            <Text style={s.carTrunkText}>Open</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={s.carRoof} onPress={toggleRoof}>
                        {statusRoof ? <Text style={s.carRoofText}>Close</Text> :
                            <Text style={s.carRoofText}>Open</Text>}
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    )
};

const s = StyleSheet.create({
    imgContainer: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    carImage: {
        width: 250,
        height: 550,
        marginTop: 50,
    },
    carHood: {
        position: "absolute",
        top: "85%",
        left: "50%",
        transform: [{translateX: -10}],
    },
    carHoodText: {
        color: "rgba(235, 235, 245, 0.80))"
    },
    carTrunk: {
        position: "absolute",
        top: "17%",
        left: "50%",
        transform: [{translateX: -10}],
    },
    carTrunkText: {
        color: "rgba(235, 235, 245, 0.80))"
    },
    carRoof: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{translateX: -10}],
    },
    carRoofText: {
        color: "rgba(235, 235, 245, 0.80))"
    }
})

export default ControlCarPage;
