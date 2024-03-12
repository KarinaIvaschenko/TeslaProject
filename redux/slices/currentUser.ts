import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserInfo } from "../../api/getUserInfo";

export interface IStateCurrentUser {
    email: string;
    telephone: string;
    firstName: string;
    lastName: string;
    login: string;
    password: string;
    isLoading: boolean;
}

const initialState: IStateCurrentUser = {
    email: "",
    telephone: "",
    firstName: "",
    lastName: "",
    login: "",
    password: "",
    isLoading: false,
};

export const getCurrentUser = createAsyncThunk(
    "users/getCurrentUser",
    async () => {
        return await getUserInfo();
    }
);

const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers: {
        resetData: (state) => {
            state.email = "";
            state.telephone = "";
            state.firstName = "";
            state.lastName = "";
            state.login = "";
            state.password = "";
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCurrentUser.pending, (state: IStateCurrentUser) => {
            state.isLoading = true;
        });
        builder.addCase(
            getCurrentUser.fulfilled,
            (state: IStateCurrentUser, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.email = action.payload.email;
                state.telephone = action.payload.telephone;
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.login = action.payload.login;
                state.password = action.payload.password;
            }
        );
    },
});

export const { resetData } = currentUserSlice.actions;
export default currentUserSlice.reducer;
