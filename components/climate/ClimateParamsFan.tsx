import {Text, TouchableOpacity, View, Image} from "react-native";
import Slider from "@react-native-community/slider";
import stylesClimate from "./stylesClimate";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/store";
import {changeParamItem, toggleParamItem} from "../../redux/slices/statusClimate";

const ClimateParamsFan = () => {
    const dispatch = useDispatch()
    const params = useSelector((state: RootStateType) => state.climate.fan);

    const onPressBtnFan = () => {
        dispatch(toggleParamItem("fan"))
    }
    const handleSliderChange = (newValue: number) => {
        if (params.status === "on") {
            dispatch(changeParamItem({param: "fan", newValue}))
        }
    }
    return (
        <View style={stylesClimate.climateContainer}>
            <Text style={stylesClimate.climateText}>Fan</Text>
            <TouchableOpacity
                style={stylesClimate.climateSVG}
                onPress={onPressBtnFan}
            >
                {params.status === "on" ? (
                    <View
                        style={[
                            stylesClimate.climateIconBorder,
                            stylesClimate.climateIconBorderBlue,
                        ]}
                    >
                        <Image
                            source={require("../../assets/icons/climateSettingFanBlue.png")}
                            style={stylesClimate.climateIcon}
                        />
                    </View>
                ) : (
                    <View
                        style={[
                            stylesClimate.climateIconBorder,
                            stylesClimate.climateIconBorderWhite,
                        ]}
                    >
                        <Image
                            source={require("../../assets/icons/climateSettingFanWhite.png")}
                            style={stylesClimate.climateIcon}
                        />
                    </View>
                )}
            </TouchableOpacity>
            <View style={stylesClimate.climateSlider}>
                <Slider
                    style={{width: 200, height: 40}}
                    minimumValue={0}
                    maximumValue={7}
                    step={1}
                    value={params.value}
                    minimumTrackTintColor="#11A8FD"
                    maximumTrackTintColor="#212325"
                    thumbTintColor="#212325"
                    lowerLimit={0}
                    upperLimit={7}
                    onValueChange={handleSliderChange}
                />
            </View>
        </View>
    );
};

export default ClimateParamsFan;
