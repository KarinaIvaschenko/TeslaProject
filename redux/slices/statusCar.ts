import { createSlice } from "@reduxjs/toolkit";

export interface IStateCar {
    statusApp: boolean;
    statusOpenCar: boolean;
}

const initialState: IStateCar = {
    statusApp: false,
    statusOpenCar: false,
};

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        toggleStatusApp: (state) => {
            state.statusApp = !state.statusApp;
        },
        toggleStatusOpenCar: (state) => {
            state.statusOpenCar = !state.statusOpenCar;
        },
    },
});

export const { toggleStatusApp, toggleStatusOpenCar } = carSlice.actions;

export default carSlice.reducer;
