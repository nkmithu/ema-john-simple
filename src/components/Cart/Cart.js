import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0)
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    } else if (total > 15) {
        shipping = 4.99;
    } else if (total > 0) {
        shipping = 4.99;
    }
    const tax = total/10;

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
            
            <Link to="/review"><button className="main-btn">Review Order</button></Link>
        </div>
    );
};

export default Cart;