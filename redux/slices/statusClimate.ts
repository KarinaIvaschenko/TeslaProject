import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IParam {
    status: "on" | "off";
    value: number;
}

export interface IStateClimate {
    ac: IParam;
    fan: IParam;
    heat: IParam;
    auto: IParam;
}


const initialState: IStateClimate = {
    ac: {
        status: "off",
        value: 20,
    },
    fan: {
        status: "off",
        value: 0,
    },
    heat: {
        status: "off",
        value: 24,
    },
    auto: {
        status: "on",
        value: 22,
    },
};

const climateSlice = createSlice({
    name: "climate",
    initialState,
    reducers: {
        toggleParamItem: (state, action: PayloadAction<string>) => {
            for (let param in state) {
                if (action.payload === param) {
                    state[param].status = state[param].status == "on" ? "off" : "on"

                } else {
                    state[param].status = "off"
                }
            }
        },
        changeParamItem: (state, action: PayloadAction<{param: string, newValue: number}>) => {
            const {param, newValue} = action.payload
            state[param].value = newValue
        }
    }
});

export const {toggleParamItem, changeParamItem} = climateSlice.actions;
export default climateSlice.reducer;
