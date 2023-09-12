
export const initialStateCart = []; 

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
}


export const reducerCart = ( state, action ) => {
    const { type: actionType, payload: actionPayload } = action;
    switch ( actionType ){
        case CART_ACTION_TYPES.ADD_TO_CART: { 
            const { id } = actionPayload;
            const porductInCartIndex = state.findIndex( item => item.id === action.payload.id );

            if( porductInCartIndex >= 0 ) {
                const newState = structuredClone(cart);
                newState[porductInCartIndex].quantity += 1;
                return newState
            };
            return [ 
                ...state,
                {
                    ...actionPayload, // el producto
                    quantity: 1
                }
            ]
        }
        case CART_ACTION_TYPES.REMOVE_FROM_CART: {
            const { id } = actionPayload;
            return state.filter( item => item.id !== id )
        }
        case CART_ACTION_TYPES.CLEAR_CART: {
            return initialStateCart;
        }

    };
    return state;
};