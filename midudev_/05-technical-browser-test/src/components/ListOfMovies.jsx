// el problema de este coponente es que estamos atándolo al contrato de la api, es decir, la api usa los elementos en Mayus y si por algún casual esto cambia, nuestro componente dejará de ser válido y se romperá por tanto, he creado el mappedMovies para ello

const Movies = (  {movies}  ) => {
    return (
        <ul className='movies'>
          {
            movies.map(movie => (
              <li className='movie' key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.image} alt={movie.title} />
              </li>
            ))
          }
        </ul>
      )
};

const NoMovies = () => {
    return (
        <p>
            No hay películas con ese nombre
        </p>
    )
};

export function ListOfMovies ({ movies }) {
    const hasMovies = movies?.length > 0;
  
    return (
      hasMovies
        ? <Movies movies={movies} />
        : <NoMovies />
    )
}