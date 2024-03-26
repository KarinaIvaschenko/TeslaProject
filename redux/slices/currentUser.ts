import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUserInfo} from "../../api/getUserInfo";
import {updateUserInfo} from "../../api/updateUserInfo";

export interface IStateCurrentUser {
    forms: string[];
    email: string;
    telephone: string;
    firstName: string;
    lastName: string;
    login: string;
    password: string;
    isLoading: boolean;
    message: false | string
}

const initialState: IStateCurrentUser = {
    forms: ["email", "telephone", "firstName", "lastName", "login"],
    email: "",
    telephone: "",
    firstName: "",
    lastName: "",
    login: "",
    password: "",
    isLoading: false,
    message: false
};

export const getCurrentUser = createAsyncThunk(
    "users/getCurrentUser",
    async () => {
        return await getUserInfo();
    }
);

export const updateCurrentUser = createAsyncThunk(
    "users/updateCurrentUser",
    async (userInfo) => {
        return await updateUserInfo({
            email: userInfo.email,
            telephone: userInfo.telephone,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            login: userInfo.login
        });
    }
)

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
        editUser: (state, action: PayloadAction<any>) => {
            const {type, value} = action.payload;
            state[type] = value;
            state.message = false;
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
        builder.addCase(
            updateCurrentUser.fulfilled,
            (state: IStateCurrentUser, action: PayloadAction<any>) => {
                state.message = "User was updated"
            }
        )
    },
});

export const {resetData, editUser} = currentUserSlice.actions;
export default currentUserSlice.reducer;
