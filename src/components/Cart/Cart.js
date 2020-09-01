import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const cart = props.cart;
    // let total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total+product.price* product.quantity;
        
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    } else if (total > 15) {
        shipping = 4.99;
    } else if (total > 0) {
        shipping = 4.99;
    }
    const dummyTax = total/10;
    const tax = dummyTax.toFixed(2) 
    

    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items ordered:{cart.length}
            </p>
            <p>Product price: {total}</p>
            <p>
                <small>Shipping : {shipping}</small>
            </p>
            <p>
                <small>Tax : {tax}</small>
            </p>
            <p>Total Price:$ {total + shipping +tax}</p>
            <br/>
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;