import { Text, TouchableOpacity, View, Image } from "react-native";
import Slider from "@react-native-community/slider";
import stylesClimate from "./stylesClimate";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";
import {
    changeParamItem,
    toggleParamItem,
} from "../../redux/slices/statusClimate";
import {useTranslation} from "react-i18next";

const ClimateParamsHeat = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const params = useSelector((state: RootStateType) => state.climate.heat);

    const onPressBtnHeat = () => {
        dispatch(toggleParamItem("heat"));
    };

    const handleSliderChange = (newValue: number) => {
        if (params.status === "on") {
            dispatch(changeParamItem({ param: "heat", newValue }));
        }
    };
    return (
        <View style={stylesClimate.climateContainer}>
            <Text style={stylesClimate.climateText}>{t('climateCarPage.text.heat')}</Text>
            <TouchableOpacity
                style={stylesClimate.climateSVG}
                onPress={onPressBtnHeat}
            >
                {params.status === "on" ? (
                    <View
                        style={[
                            stylesClimate.climateIconBorder,
                            stylesClimate.climateIconBorderBlue,
                        ]}
                    >
                        <Image
                            source={require("../../assets/icons/climateSettingHeatBlue.png")}
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
                            source={require("../../assets/icons/climateSettingHeatWhite.png")}
                            style={stylesClimate.climateIcon}
                        />
                    </View>
                )}
            </TouchableOpacity>
            <View style={stylesClimate.climateSlider}>
                <Slider
                    style={{ width: 200, height: 40 }}
                    minimumValue={16}
                    maximumValue={30}
                    step={1}
                    value={params.value}
                    minimumTrackTintColor="#11A8FD"
                    maximumTrackTintColor="#212325"
                    thumbTintColor="#212325"
                    lowerLimit={16}
                    upperLimit={30}
                    onValueChange={handleSliderChange}
                />
            </View>
        </View>
    );
};

export default ClimateParamsHeat;
