import storage from "./storage";
import {instance} from "../api/instance";

export const getToken = async () => {
    const token = await storage.load({key: "token"})
    instance.defaults.headers.common.Authorization = token
    return token
}

export const setToken = (token) => {
    storage.save({key: "token", data: token})
    instance.defaults.headers.common.Authorization = token
}