import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './CarShop.css';
const CarShop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('car.json')
        .then(res=> res.json())
        .then(data =>setProduct(data))
    }, []);

    const addToCart = (props) =>{
        let newCart = [];
        const exists = cart.find(product => product.id === props.id);
        if(!exists){
            props.quantity = 1;
            newCart = [...cart, props];
        }
        else{
            const rest = cart.filter(product => product.id !== props.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
    }
    
    
    return (
        <div className='shop-container'>
            <div className="cards-container">
            {
                products.map(product=> <Product key={product.id} title={product.title} price={product.price} image={product.image} product={product} addToCart={addToCart}></Product>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default CarShop;