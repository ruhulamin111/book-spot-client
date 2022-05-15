import React from 'react';
import './Product.css'

const Product = ({ subject }) => {
    const { name, img, price, description } = subject;

    return (
        <div className='product-part'>
            <img src={img} alt="" height={'300px'} width={'100%'} />
            <h5>Name: {name} </h5>
            <h5>Quantity: {price} </h5>
            <p>Description: {description} </p>
        </div>
    );
};

export default Product;