import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {getDatabaseCart, removeFromDatabaseCart, processOrder} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImg from '../../images/giphy.gif';
const Review = () => {
    const [cart,
        setCart] = useState([]);
    const [orderPlaced,
        setOrderplaced] = useState(false);

    const handalePlaceOrder = () => {
        setCart([]);
        setOrderplaced(true)
        processOrder();
    }

    const removeProduct = (productKey) => {
        console.log("clicked", productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        // cart
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });

        setCart(cartProducts);
    }, [])

    let thankYou;
    if (orderPlaced) {
        thankYou = <img src={happyImg} alt=""/>;
    }

    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {cart.map(pd =>< ReviewItem key = {
                        pd.key
                    }
                    product = {
                        pd
                    }
                    removeProduct = {
                        removeProduct
                    } > </ReviewItem>)}
                    {thankYou}
                </div>
                <div className="cart-container">
                    <Cart cart ={cart}>
                        <button onClick={handalePlaceOrder} className="main-btn">Place Order</button>
                    </Cart>
                </div>
            </div>

        </div>
    );
};

export default Review;