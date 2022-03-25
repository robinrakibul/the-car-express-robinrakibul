import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './CarShop.css';
const CarShop = () => {
    const [products, setProduct] = useState([]);

    useEffect( () =>{
        fetch('car.json')
        .then(res=> res.json())
        .then(data =>setProduct(data))
    }, []);

    return (
        <div className='shop-container'>
            <div className="cards-container">
            {
                products.map(product=> <Product key={product.id} title={product.title} price={product.price} image={product.image}></Product>)
            }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default CarShop;