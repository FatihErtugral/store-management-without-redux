import type { PropsWithChildren } from 'react';
import type * as methods from './methods';

export interface IStore {
    cart: Product[]
    pageName: string
}

export interface IContext extends Methods {
    store: IStore,
    dispatch: React.Dispatch<Actions>,
}

export interface IProps extends React.FC<PropsWithChildren> {
};

export type Product = {
    id: number
    name: string
    img: string
    orginalPrice: number
    discountPrice: number
    currency: string
    quantity: number
}

export type Methods<T = typeof methods> = {
    [Property in keyof T]: T[Property] extends (...args: any) => any
        ? ReturnType<T[Property]>
        : T[Property]
}

export type Actions =
    | { type: "ADD_TO_CART"; payload: Product }
    | { type: "DECREASE_PRODUCT_FROM_CART"; payload: Product['id'] }
    | { type: "REMOVE_TO_CART"; payload: Product['id'] }
    | { type: "CLEAR_CART" }
