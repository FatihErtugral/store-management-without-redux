import { useContext } from 'react'
import { StoreContext } from './store/StoreProvider'

const Product: React.FC = () => {
    const { store } = useContext(StoreContext);

    return (
        <div>this is product content
            <pre style={{ whiteSpace: 'pre-wrap'}}>
                {JSON.stringify(store.cart)}
            </pre>
        </div>
    )
}

export default Product;
