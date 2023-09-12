


export const CartItem = ({ thumbnail, price, title, quantity, addToCart, deleteToCart }) => {
    return (
        <li>
            <img src={thumbnail} alt={title} />
            <div><strong>{title}</strong> - ${price}</div>
            <footer>
                <button onClick={deleteToCart}>-</button>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}
