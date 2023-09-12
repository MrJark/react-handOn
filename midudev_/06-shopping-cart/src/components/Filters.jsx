import { useId, useState } from 'react'
import './Filters.css'
import useFilters from '../hooks/useFilters';


export const Filters = () => { 
    // para que funcionen los Filters necesito del cotext el filters 👇🏼
    const  { filters, setFilters } = useFilters();
    // si en el filtro usamos el rango, necesitas mostrar el precio ya que sino, no muestra nada y para ello se necesita controlar el estado (useState)
    // const [minPrice, setMinPrice] = useState(0); // esto es un estado local y es una de las fuentes de la verdad y la otra fuente es la del propio filter que le estamos diciendo que el minPrice es 0 y tener dos fuentes de la verdad es una mala práctica y para ello, tenemos que fiarnos del filtro global y no del local, como es este useState
    

    /**
     * lo que te hace este hook es crear un id único para cada una de las variables en las cuales lo estés asignando
     * no sirven los useId para pasarlos como key en los .map
    */
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (e) => {
        // esta función, de esta manera, está mal, funciona pero no es la forma correcta porque hay dos fuentes de la verdad. La forma corracta sería usar un useContext
        // setMinPrice(e.target.value) // esto siempre es así porque del evento quieres coger su valor que está en el target
        setFilters( prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleCategoryChange = (e) => {
        // esto tp está bien porque estamos pasando la funcion de actualizar estado nativa de react a un compoenete hijo
        setFilters( prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input type='range'
                id={minPriceFilterId}
                min='0'
                max='1700' 
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleCategoryChange}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Phones</option>
                </select>
            </div>
        </section>
    )
}
