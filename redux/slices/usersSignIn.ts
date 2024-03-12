import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCandidate } from "../../api/signIn";

export interface IStateDriver {
    loginOrEmail: string;
    password: string;
    token: string;
}

const initialState: IStateDriver = {
    loginOrEmail: "",
    password: "",
    token: "",
};

export const getTokenUser = createAsyncThunk(
    "users/getTokenUser",
    async (values) => {
        return await getCandidate(values);
    }
);

const driverSlice = createSlice({
    name: "driver",
    initialState,
    reducers: {
        driverForm: (state, action: PayloadAction<any>) => {
            const { type, value } = action.payload;
            state[type] = value;
        },
        resetToken: (state) => {
            state.loginOrEmail = "";
            state.password = "";
            state.token = "";
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            getTokenUser.fulfilled,
            (state: IStateDriver, action: PayloadAction<any>) => {
                state.token = action.payload.token;
            }
        );
    },
});

export const { driverForm, resetToken } = driverSlice.actions;
export default driverSlice.reducer;
