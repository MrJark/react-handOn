// contexto para el carrito
import { createContext, useReducer } from 'react';
import { CART_ACTION_TYPES, initialStateCart, reducerCart } from '../reducers/reducerCart';
import { useCartReducer } from '../hooks/useCartReducer';



// 1º crear contexto
export const CartContext = createContext();

// 2º crear provider
export function CartProvider ({ children }) {


    const { state, addToCart, removeFromCart, clearCart } = useCartReducer();
    // este useState ya no me es útil porque como tengo el reducer, voy a usar el useReducer
    // const [cart, setCart] = useState([]); // un array para que sea lo más sencillo posible
    // puedo eliminar el addToCart, y los demás, gracias al reducer
    // const addToCart = product => {
        //     // setCart([...cart, product]); // forma más sencilla de hacer el add to cart. El problema del espread es que solo hace una copia superficial y puede traer problemas por eso se hace con el structureclone
        //     // forma algo más 'compleja' pero mejor: check if product is already in the cart
        //     const porductInCartIndex = cart.findIndex(item => item.id === product.id ); // si el porducto está en el cart, si tiene ese mismo index
        
        //     if( porductInCartIndex >= 0 ) {
            //         // otra forma de añadir productos al carrito sería usando el structureClone
            //         const newCart = structuredClone(cart);
            //         newCart[porductInCartIndex].quantity += 1;
            //         return setCart(newCart)
            //     };
            //     // si el porducto no está en el cart
            //     setCart( prevState => ([
                //         ...prevState,
                //         {
                    //             ...product,
                    //             quantity: 1 // añadimos el eproducto al carrito con la cantidad 1
                    //         }
                    //     ]))
                    
                    // };
                    // const deleteToCart = () => {
                        
                        // }
                        //puedo quitar estas también gracias al reducer
                        // const removeFromCart = product => {
                            //     setCart( prevState => prevState.filter( item => item.id !== product.id)); // filtramos los productos que no tengan el id igual === eliminar
                            // }
                            // const clearCart = () => {
                                //     setCart([]);
                                // };

    /**
     * useReducer tiene com parámetros el state y el dispatch que es u afunción que se enccarga de enviar las acciones al reducer
     */
    // const [state, dispatch] = useReducer(reducerCart, initialStateCart);
    // const addToCart = product => dispatch({
    //     type: CART_ACTION_TYPES.ADD_TO_CART,
    //     payload: product
    // });
    // const removeFromCart = product => dispatch({
    //     type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    //     payload: product
    // });
    // const clearCart = () => dispatch({ type: CART_ACTION_TYPES.CLEAR_CART });

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    );
};