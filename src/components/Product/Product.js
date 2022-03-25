import React from 'react';
import './Product.css';

const Product = (props) => {
    const { title, price, image } = props;
    return (
        <div className='card p-3'>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <img className='img-fluid' src={image} alt=""></img>

        </div>
    );
};

export default Product;