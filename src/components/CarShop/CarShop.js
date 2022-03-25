import React, { useEffect } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './CarShop.css';
const CarShop = () => {
    

    useEffect( () =>{
        fetch('car.json')
        .then(res=> res.json())
        .then(data =>console.log(data))
    }, []);

    return (
        <div className='shop-container'>
            <div className="cards-container">
                <Product></Product>
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default CarShop;