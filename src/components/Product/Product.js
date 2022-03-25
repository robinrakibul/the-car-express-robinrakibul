import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { title, price, image } = props;
    return (
        <div className='card card-info p-3'>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <img className='img-fluid' src={image} alt=""></img>
            <button className='btn btn-primary mt-4'>Add to Cart <FontAwesomeIcon icon={faCartPlus}/></button>
        </div>
    );
};

export default Product;