import type { Actions, IStore } from './type';

const logic = (state: IStore, action: Actions): IStore => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const cart = [...state.cart];
            const index = cart.findIndex(cart => cart.id === action.payload.id);

            if (index !== -1) {
                cart[index].quantity += action.payload.quantity; 
            } else {
                cart.push(action.payload);
            }

            console.log('oki');
            


            return Object.assign({}, state, { cart });
        }
        case "DECREASE_PRODUCT_FROM_CART": {
            const cart = [...state.cart];
            const index = cart.findIndex(cart => cart.id === action.payload);

            cart[index].quantity--;

            if (cart[index].quantity === 0) {
                cart.slice(index, 1);
            }


            return Object.assign({}, state, { cart });
        }
        case "REMOVE_TO_CART": {
            const cart = [...state.cart].filter(product => product.id !== action.payload);

            return Object.assign({}, state, { cart });
        }
        case "CLEAR_CART": {
            return Object.assign({}, state, { cart: [] });
        }
                
        default: {
            return state;

        }
    }
}

export default logic;