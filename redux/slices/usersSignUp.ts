import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IStateUsers {
    email: string,
    telephone: string,
    firstName: string,
    lastName: string,
    login: string,
    password: string
}

const initialState: IStateUsers = {
    email: '',
    telephone: '',
    firstName: '',
    lastName: '',
    login: '',
    password: ''
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        changeForm: (state, action: PayloadAction<any>) => {
            const {type, value} = action.payload
            state[type] = value
        }
    }
});

export const {changeForm} = usersSlice.actions;
export default usersSlice.reducer;