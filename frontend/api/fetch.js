import axios from "axios";

export const axiosFetch = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
    },
});



