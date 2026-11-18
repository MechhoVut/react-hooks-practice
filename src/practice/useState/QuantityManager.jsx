import { useState } from 'react';

function ShoppingCart(){
    const [quantity, setQuantity] = useState(1);

    const price = 500;
    const total = price * quantity;

    return(
        <div>
            <h2>T-Shirt</h2>
            <p>Price: {price}</p>

            <button onClick={() => setQuantity (prev =>Math.max(1,prev - 1))}>
               - 
            </button>

            {quantity}

            <button onClick={() => setQuantity(prev => prev +1)}>
               +
            </button>

            <h3>Total: {total}</h3>
        </div>
    );
}
export default ShoppingCart;