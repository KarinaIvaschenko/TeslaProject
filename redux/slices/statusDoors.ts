import { createSlice } from "@reduxjs/toolkit";

export interface IStateDoors {
    statusHood: boolean;
    statusTrunk: boolean;
    statusRoof: boolean;
}

const initialState: IStateDoors = {
    statusHood: false,
    statusTrunk: false,
    statusRoof: false,
};

const doorsSlice = createSlice({
    name: "doors",
    initialState,
    reducers: {
        toggleStatusHoodOpen: (state) => {
            state.statusHood = !state.statusHood;
        },
        toggleStatusTrunkOpen: (state) => {
            state.statusTrunk = !state.statusTrunk;
        },
        toggleStatusRoofOpen: (state) => {
            state.statusRoof = !state.statusRoof;
        },
    },
});

export const {
    toggleStatusHoodOpen,
    toggleStatusTrunkOpen,
    toggleStatusRoofOpen,
} = doorsSlice.actions;

export default doorsSlice.reducer;
