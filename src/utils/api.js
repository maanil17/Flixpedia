import axios from "axios";


const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzExZGRmZDc3ZjY0MWI5MjUzZGVjZDQ5M2ZkMmJkNyIsInN1YiI6IjY0M2E4ZjNiMDkxZTYyMDUzMzVlMjBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bhcurRWsoDjOsK9olCcxPLVpRqX6VmbMrMW_wtLQTSg";

const headers= {
    Authorization: "bearer " + TMDB_TOKEN,
}



export const fetchDataFromApi = async (url,params) => {

    

    try {

        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params


        })

        

        return data

    }

    catch(err) {

        console.log(err)

        return err;

    }


}