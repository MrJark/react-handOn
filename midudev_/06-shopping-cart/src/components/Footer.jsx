import { useCart } from '../hooks/useCart';
import useFilters from '../hooks/useFilters';
import './Footer.css';


// le quitamos las props gracias al context
export function Footer () {
  const { filters } = useFilters();
  const { cart } = useCart();

    return (
        <footer className='footer'>
        {/* {
            JSON.stringify(filters, null, 2)
        } */}

        {/* {
            JSON.stringify(cart,null,2)
        } */}

        <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
        <h5>Shopping Cart con useContext & useReducer</h5>
        <h4><span>@mrjark_</span></h4>
        </footer>
    )
}

/**
 * Este tipo de elementos puede ser una buena forma de saber como se está comportando el estado 
*/