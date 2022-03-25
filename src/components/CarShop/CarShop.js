import React from 'react';
import Cart from '../Cart/Cart';
import './CarShop.css';
const CarShop = () => {
    return (
        <div className='shop-container'>
            <div className="cards-container">
                <h1>Products</h1>
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default CarShop;