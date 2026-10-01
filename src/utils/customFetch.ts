import axios from "axios"
const snapiAPI = "https://api.spaceflightnewsapi.net/v4"
const datastroApi = "https://www.datastro.eu/api/explore/v2.1/catalog/datasets/nasahubble/records";
const nasaApi = "https://science.nasa.gov/wp-json/wp/v2";
const webbApi = "https://api.jwstapi.com"

export const snapiCustomFetch = axios.create({
    baseURL: snapiAPI,
})

export const datastroCustomFetch = axios.create({
    baseURL: datastroApi,
})

export const nasaCustomFetch = axios.create({
    baseURL: nasaApi
})

export const webbCustomFetch = axios.create({
    baseURL: webbApi,
    headers: {"X-API-KEY": import.meta.env.VITE_API_KEY_JWST},
})
