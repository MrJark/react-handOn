import{ createContext, useState } from 'react'
// esta file debe crearse con el .jsx porque es componente de react

//* esto es un Singleton

// 1º crear el contexto. Esto es lo que tenemos que consumir
export const FiltersContext = createContext();

// 2º proveer el contexto con el Provider, esto es lo que tienes que proveer y que te da acceso al contexto. En el provaider es donde estará la info a la cual queremos acceder. Este filters tenemos que usarlo donde quieras poder tener acceso a este contenido, el value que es el category y minPrice. En este caso es a nivel de toda la app
export function FiltersProvider ({ children }) { // es necesario pasar el children ya que esto es el hijo al cual tiene que psar el contexto que has creado

    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return (
        <FiltersContext.Provider value={{
            // puedes crear aquí lo que quieres que pase si va a ser estático pero cmoo no queremos que lo sea, tenemos que tener un useState para controlar esto sestados y al value, hay que pasarlo estos estados que el useState controla y en el hook useFilters.js hay que sacar del useContext el 
            // estos son los valores que queremos proveer
            filters,
            setFilters
        }} >
            {children}
        </FiltersContext.Provider>
    )
}

// 3º consumir el contexto
