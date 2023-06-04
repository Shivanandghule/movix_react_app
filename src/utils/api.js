import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const IMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    authorization: "Bearer " + IMDB_TOKEN,
}

export const fetchDataFromAPI = async (url,params) => {
     try {
        const response = await axios.get(BASE_URL + url,{
         headers,
         params   
        })
        return response.data;
     } catch (error) {
        console.log(error);
     }
}