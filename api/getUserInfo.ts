import {instance} from "./instance";

export const getUserInfo = async () => {
    try {
        const {data} = await instance.get("/customers/customer");
        return data;
    } catch (error) {
        throw new Error(error);
    }
}