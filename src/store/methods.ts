import React from 'react';
import type { Actions, Product } from './type';

export const addToCart = (dispatch: React.Dispatch<Actions>) => (payload: Product) =>  {
    dispatch({ type: "ADD_TO_CART", payload });
}

export const decreaseProductFromCart = (dispatch: React.Dispatch<Actions>) => (payload: Product['id']) =>  {
    dispatch({ type: "DECREASE_PRODUCT_FROM_CART", payload });
}


export const removeToCart = (dispatch: React.Dispatch<Actions>) => (payload: Product['id']) =>  {
    dispatch({ type: "REMOVE_TO_CART", payload });
}

export const cleartCart = (dispatch: React.Dispatch<Actions>) => () => {
    dispatch({ type: "CLEAR_CART"});
}