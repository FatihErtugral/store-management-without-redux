import { useContext, useRef } from 'react';
import { StoreContext } from './store/StoreProvider';

const Cart: React.FC = () => {
    const {
        store,
        addToCart,
        removeToCart,
        cleartCart,
        decreaseProductFromCart
    } = useContext(StoreContext);
    const renderCounter = useRef(0);

    renderCounter.current += 1;

    return (
        <>
        <h1>{renderCounter.current}</h1>
        <button
            onClick={() => {
                addToCart({
                    id: 1,
                    name: 'Test',
                    img: 'test.png',
                    orginalPrice: 10,
                    discountPrice: 9,
                    currency: 'TL',
                    quantity: 1
                });
            }}
        >
            add 1
        </button>
        <button
            onClick={() => {
                addToCart({
                    id: 2,
                    name: 'Test 2',
                    img: 'test2.png',
                    orginalPrice: 10,
                    discountPrice: 9,
                    currency: 'TL',
                    quantity: 1
                });
            }}
        >
            add 2
        </button>

        <button
            onClick={() => {
                const id = 1;
                decreaseProductFromCart(id);
            }}
        >
            decrease by productId
        </button>

        <button
            onClick={() => {
                const id = 1;
                removeToCart(id);
            }}
        >
            remove all by productId
        </button>

        <button
            onClick={() => {
                cleartCart();
            }}
        >
            clear basket
        </button>
        
        <div>
            this is cart page
            <pre style={{ whiteSpace: 'pre-wrap'}}>
                {JSON.stringify(store.cart)}
            </pre>
        </div>
        </>
    )
}

export default Cart;
