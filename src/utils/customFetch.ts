import axios from "axios"
const snapiAPI = "https://api.spaceflightnewsapi.net/v4/articles/"
const datastroApi = "https://www.datastro.eu/api/explore/v2.1/catalog/datasets/nasahubble/records";
const nasaApi = "https://api.nasa.gov/planetary/apod";

export const snapiCustomFetch = axios.create({
    baseURL: snapiAPI,
})

export const datastroCustomFetch = axios.create({
    baseURL: datastroApi,
})

export const nasaCustomFetch = axios.create({
    baseURL: nasaApi,
    params: {api_key: import.meta.env.VITE_API_KEY_NASA},
})
