// import withResults from '../mocks/with-results.json';
// import { URL_ALL_DATA_REQUEST_TO_SEARCH } from '../constants/constants';
// import withoutResults from '../mocks/without-results.json';

import { useCallback, useMemo, useRef, useState } from 'react';
import { searchMovies } from '../service/movies';

export const useMovies = ( {search, sort} ) => {
    
    const [movies , setMovies] = useState([]);// estado inicial
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const previousSearch = useRef(search); // como el useRef hace que un estado permanezca inmutable aunque el componente se renderice, voy a usarlo para mantener la búsqueda anterior
    // const movies = responseMovies.Search; // para sacar las películas gracias a la estructura del json sabes como es

    // const mappedMovies = movies?.map( movie => ({
    //     id: movie.imdbID,
    //     title: movie.Title,
    //     year: movie.Year,
    //     image: movie.Poster,
    // }))

    // const getMovies = () => {
    //     if ( search ) {
    //         // setResponseMovies(withResults)
    //         fetch(`${ URL_ALL_DATA_REQUEST_TO_SEARCH }${ search }`)
    //             .then( res => res.json() )
    //             .then( json => {
    //                 setResponseMovies(json)
    //             })
    //     } else {
    //         setResponseMovies(withoutResults)
    //     }
    // }

    // función con useMemo 👇🏼
    // const getMovies = useMemo( () => {
    //     return async ({search}) => { // esta funcion se está ejecutando cada vez que se renderiza el componente cosa que en los hooks de react no pasa porque guarda el valor de dicho hook en memoria y para que esto no pase, existe el useMemo el cual guarda el componente y solo se renderizará dependiendo de alguna dependencia que le digas
    //         // se le tiene que pasar por parámetro a la función el search si quiero que no tenga dependencias en el useMemo y que las tenga dentro de la propia funcion
    //         if ( search === previousSearch.current ) return; 
    //         try {
    //         setLoading(true);
    //             setError(null);
    //             previousSearch.current = search;
    //             const newMovies = await searchMovies({search});
    //             setMovies(newMovies);
            
    //         } catch (error) {
    //             setError(error.message)
    //         } finally {
    //             // esto se ejecuta después del try y después del catch
    //             setLoading(false)
    //         }
    //     }
    // }, []); // tiene sentido que esa función esté en un useMemo porque no debería renderizarse cada vez
    
    // función con useCallback 👇🏼 la diferencia es que no tenemos que pasarle un callback el useCallback
    const getMovies = useCallback(
        async ({search}) => { 
        if ( search === previousSearch.current ) return; 
        try {
        setLoading(true);
            setError(null);
            previousSearch.current = search;
            const newMovies = await searchMovies({search});
            setMovies(newMovies);
        
        } catch (error) {
            setError(error.message)
        } finally {
            // esto se ejecuta después del try y después del catch
            setLoading(false)
        }
    }, []); 


    // sin useMemo👇🏼
    // const sortedMovies = sort // para comparar los títulos es para lo que va a servir el checkbox y con esto valido si los títulos son iguales o no
    //     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    //     :movies

    // con useMemo 👇🏼
    const sortedMovies = useMemo(() => {
        return sort 
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            :movies
    }, [sort, movies]); // solo quiero que cambie cunado cambie el sort o las propias películas

    // return { movies: mappedMovies, getMovies }
    return { movies: sortedMovies, getMovies, loading, error }
}