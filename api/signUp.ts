import {instance} from "./instance";

export const sendCandidateToSignUp = async (formData) => {
    try {
        const {data} = await instance.post("customers", formData);
        return data;
    } catch (error) {
        throw new Error(error);
    }
}