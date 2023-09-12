import { Filters } from './Filters'

// elimino la prop changeFilters gracias al context
export const Header = () => {
    return (
        <header>
            <h1>React Shop 🛒 </h1>
            <Filters/>
        </header>
    )
}
