import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';
import './Cart.css';
import { useCart } from '../hooks/useCart';
import { CartItem } from './CartItem';


export const Cart = () => {

    const cartChexboxId = useId();
    const { cart, clearCart, addToCart, deleteToCart } = useCart();

    return (
        <>
            <label htmlFor={cartChexboxId} className='cart-button'>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartChexboxId} hidden/> 

            <aside className='cart'>
                <ul>
                    {
                        cart.map( product => (
                            <CartItem 
                                key={product.id }
                                addToCart={() => addToCart(product)} 
                                { ...product}    
                            />
                        ))
                    }
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>

            </aside>
        </>
    )
}
