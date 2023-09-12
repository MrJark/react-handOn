import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export default function useFilters () {

    // const maxPrices = (products) => {
    //   return products.filter( product => {
    //     return (
    //       product.price
    //     )
    //   })
    // }
  
    // para filtrar y para saber si está funcionando el filtro, podemos modificarlo a mano y ver si está respondiendo
    // const [filters, setFilters] = useState({ // comento el useState porque voy a usar el contexto que es de donde sacaré los dos filtros
    //   category: 'all',
    //   minPrice: 0,
    //   // maxPrice: 1749 // quizas hay que quitarla
    // })

    const { filters, setFilters } = useContext(FiltersContext); // el usar solo el useContext sin cambiar el estado, se llama estado estático, y a veces puede ser útil para tener ciertas funcionalidades como los colores en un theme, etc. En este caso, nos interesa que el contexto sea reactivo para cambiarlo

  
    //! el filtrar es ESENCIAL que se sepa hacer de memoria
    const filterProducts = (products) => {
      return products.filter(product => {
        return (
          product.price >= filters.minPrice &&
          // product.price >= filters.maxPrice && // quizas hay que quitarla y a la de arriba en vez del || es el &&
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
    };

    return  { filters ,filterProducts, setFilters }
}