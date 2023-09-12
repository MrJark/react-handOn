import { URL_ALL_DATA_REQUEST_TO_SEARCH } from "../constants/constants"

export const searchMovies = async ( { search }) => {
    if( search === '' ) return null;
    try {
        const res = await fetch(`${URL_ALL_DATA_REQUEST_TO_SEARCH}${search}`);
        const json = await res.json();

        const movies = json.Search; // para sacar las películas gracias a la estructura del json sabes como es

        return movies?.map( movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster,
        }))


    } catch (error) {
        throw new Error('Error searching movies')
    }
}