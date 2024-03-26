import { configureStore } from "@reduxjs/toolkit";
import statusCar, { IStateCar } from "./slices/statusCar";
import statusClimate, { IStateClimate } from "./slices/statusClimate";
import statusDoors, { IStateDoors } from "./slices/statusDoors";
import statusCharge, { IStateCharge } from "./slices/statusCharge";
import { IStateUsers } from "./slices/usersSignUp";
import usersSignUp from "./slices/usersSignUp";
import usersSignIn, { IStateDriver } from "./slices/usersSignIn";
import currentUser, {
    getCurrentUser,
    IStateCurrentUser,
} from "./slices/currentUser";
import { getToken } from "../utils/tokens";

export type RootStateType = {
    car: IStateCar;
    climate: IStateClimate;
    doors: IStateDoors;
    charge: IStateCharge;
    users: IStateUsers;
    driver: IStateDriver;
    user: IStateCurrentUser;
};

const store = configureStore({
    reducer: {
        car: statusCar,
        climate: statusClimate,
        doors: statusDoors,
        charge: statusCharge,
        signUp: usersSignUp,
        signIn: usersSignIn,
        user: currentUser,
    },
});

getToken().then((token) => {
    if (token) {
        store.dispatch<any>(getCurrentUser());
    }
});

export default store;
