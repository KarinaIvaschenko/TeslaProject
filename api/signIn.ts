import {instance} from "./instance";

export const getCandidate = async (formData) => {
    try {
        const {data} = await instance.get("/customers/login", formData);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}