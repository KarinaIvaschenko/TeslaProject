import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IStateCharge {
    percent: number;
}

const initialState: IStateCharge = {
    percent: 60
};

const chargeSlice = createSlice({
    name: "charge",
    initialState,
    reducers: {
        chargePercent: (state, action: PayloadAction<number>) => {
          state.percent = action.payload;
        }
    }
});

export const {chargePercent} = chargeSlice.actions;
export default chargeSlice.reducer;
