import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://tesla-project-back-end.vercel.app/api'
});