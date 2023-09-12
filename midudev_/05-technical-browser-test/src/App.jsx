import './App.css';

import { useMovies, useSearch } from './hooks';

import { ListOfMovies } from './components';

import { useCallback, useState } from 'react';
import debounce from 'just-debounce-it';

export const App = () => {
    const [ sort, setSort ] = useState(false);

    const  { search, setSearch, error } = useSearch();
    const { movies , getMovies, loading } = useMovies({search, sort }); // custom hook para el manejo de los constratos de la API

    // Estos tres tipos de manejo de formularos 👇🏼 son DE FORMA NO CONTROLADA
    // const handleSubmit = (e) => { // con react
    //     e.preventDefault();
    //     const value = inputRef.current.value;
    //     console.log({value});
    // };

    // const handleSubmit = (e) => { // con javascript para un solo input ya que uso el query
    //     e.preventDefault();
    //     const fields = new window.FormData(event.target);
    //     const query = fields.get('queryInput')
    //     console.log(query);
    // };

    // de esta manera funcionaría raro, lo que tenemos que hacer es usar un useCallback para que se guarde y solo cambie segun que dependencia quiera
    // const debounceGetMovies = debounce( search => {
    //     getMovies({search})
    // }, 500);

    // con useCallback
    const debounceGetMovies = useCallback(
        debounce( search => {
            getMovies({search})
        }, 500)
        ,[getMovies]
    )

    const handleSubmit = (e) => { // con javascript para todos los inputs que quiera
        e.preventDefault();
        // const fields = Object.fromEntries( // en la forma controlada esta parte no te hace falta porque ya lo estás haciendo con el setQuery
        //     new window.FormData( e.target )
        // )
        // console.log(fields);
        getMovies({search});
        // console.log('funciona submit');
    }

    const handleSort = () => {
        setSort(!sort)
    }

    // para la froma CONTROLADA se tiene que crear un estado ( useState ) que lo controle pero es más lanto ya que se tiene que renderizar cada vez que el input cambie
    // const [query, setQuery] = useState('');
    // para usar esta, hay que mantarle al in put el value = { query }
    // usar el setQuery se hace en el handleChange que es lo que se le manda al input cada vez que cambie

    const handleChange = (e) => {
        const newSearch = e.target.value;
        setSearch(newSearch)
        // getMovies( {search: newSearch }) //! esto es para que haga la busqueda automaticamente y por tanto es lo deonde quieres hacer el debounce
        // console.log('funciona el change');
        debounceGetMovies(newSearch);
    }


    return (
        <div className='page'>
            <header>        
                <h1>Film Browser</h1>
                <form className='form' onSubmit={handleSubmit}>
                    <input onChange={handleChange} value = { search } name='queryInput' placeholder='Avengers' />
                    <input type="checkbox" onChange={handleSort} checked={sort}/>
                    <button
                        type='submit'
                    >Search</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </header>
            
            <main>
                {/* dejar aquí el ternario, sería una mala práctica ya que esto lo que renderiza es componentes por tanto, debería ser un componente pero en una prueba técnica puedes hacerlo si explicas que es mala práctica y lo que harías con él*/}
                {/*
                    hasMovie
                        ? (
                            <ul>
                                {
                                    movies.map( movie => (
                                        <li key={movie.imdbID}>
                                            <h3>{movie.Title}</h3>
                                            <p>{movie.Year}</p>
                                            <p>{movie.Type}</p>
                                            <img src={movie.Poster} alt={movie.Title} />
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                        :
                        <p>No hay películas con ese id</p>
                */}
                {
                    loading ? 'Loading...' : <ListOfMovies movies={movies}/>
                }
                {/* <ListOfMovies movies={movies}/> */}
            </main>

            <footer>
                Made with love by <a href="https://linkedin.com/in/mrjark"> MrJark </a> with <a href="https://www.youtube.com/@midulive">Midudev</a>
            </footer>
        </div>
    )
}
