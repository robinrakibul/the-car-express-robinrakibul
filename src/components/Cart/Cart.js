import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {product, emptyCart} = props;
    const { cart } = props;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
    }
    return (
        <div className='selected-items'>
             <p className='items'>Selected Cars: {quantity}</p>
             
            {cart.map(product => (     
            <li className='list-items' key={product.id}>  
                <p className='p-1'><img className='image-size-cart' src={product.image} alt="" /> {product.title}</p>
            </li>  
            ))
            }  

            <div className='d-flex flex-column justify-content-center align-items-center'>
                <button className='btn btn-outline-success w-50'>Choose 1 for me</button>
                <button onClick={() => emptyCart(product)}className='btn btn-outline-danger w-50 mt-3'>Choose Again</button>
            </div>
        </div>
    );
    
};

export default Cart;