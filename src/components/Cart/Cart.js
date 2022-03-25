import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
    }

    return (
        <div className='selected-items'>
             <p className='items'>Selected Cars: {quantity}</p>
             
            {cart.map(product => (     
            <li>  
                <img className='image-size-cart' src={product.image} alt="" /> {product.title}
            </li>  
            ))
            }  
        </div>
    );
    
};

export default Cart;