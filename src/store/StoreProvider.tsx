import type { IContext, IProps, Methods, IStore } from './type';
import { createContext, useReducer } from 'react';
import * as methods from './methods';
import logic from './logic';

const initialStore: IStore = {
    cart: [],
    pageName: '',
}

export const StoreContext = createContext({} as IContext);

StoreContext.displayName = 'Store';

const StoreProvider: IProps = ({ children }) => {
    const [store, dispatch] = useReducer(logic, initialStore);
    const mapMethodsToContext = {} as any;

    (Object.keys(methods) as Array<keyof Methods>).forEach((methodName) => {
        const method = methods[methodName];

        mapMethodsToContext[methodName] = method(dispatch);
    });

    return (
        <StoreContext.Provider
            value={{
                store,
                dispatch,
                ...mapMethodsToContext as Methods
            }}
            children={children}
        />
    )
}

export default StoreProvider;