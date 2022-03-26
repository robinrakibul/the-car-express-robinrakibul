import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const {product, addToCart} = props;
    const { title, price, image } = props;
    return (
        <div className='card rounded-3 card-info p-3'>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <img className='img-fluid rounded-3' src={image} alt=""></img>
            <button onClick={() => addToCart(product)} className='btn btn-outline-primary mt-4'>Add to Cart <FontAwesomeIcon icon={faCartPlus}/></button>
        </div>
    );
};

export default Product;