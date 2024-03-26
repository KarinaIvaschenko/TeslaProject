import {instance} from "./instance";

export const updateUserInfo = async (newValues) => {
    try {
        const {data} = await instance.put("/customers", newValues);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}