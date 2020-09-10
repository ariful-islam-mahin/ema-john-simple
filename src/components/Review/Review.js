import React, { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import '../Shop/Shop.css'
import Cart from '../Cart/Cart';
import { Link, useHistory } from 'react-router-dom';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false);
    let history = useHistory();

    const handleProceedCheckout = () => {
        history.push("/shipment");
    }

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product
        });
        setCart(cartProducts);
    }, []);

    // const thankyou = 
    return (
        <div className="twin-container">
            <div className='product-container'>
                {
                    cart.map(pd => <ReviewItem removeProduct={removeProduct} key={pd.key} product={pd}></ReviewItem>)
                } 
                {
                    orderPlace && <img src={happyImage} alt=""/>
                }
            </div>
            <div>
                <Cart cart={cart}>
                        <button onClick={handleProceedCheckout} className='main-button'>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;