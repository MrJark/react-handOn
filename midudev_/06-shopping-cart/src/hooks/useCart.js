import { useContext } from 'react';
import { CartContext } from '../context/cart';

export const useCart = () => {
    const cart = useContext(CartContext);

    if ( cart === undefined ) { // si te da este error es porque esa parte del coponente no está envuelta en el provider y es necesario y esto es una BUENA PRÁCTICA
        throw new Error('Se necesita un Provider para poder usar el useCart'); 
    }

    return cart
}