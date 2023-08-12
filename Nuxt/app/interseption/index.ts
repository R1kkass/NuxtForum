import axios from "axios";

export const $api = axios.create({
    baseURL: "https://643c107f70ea0e6602a092ed.mockapi.io/film",
});
