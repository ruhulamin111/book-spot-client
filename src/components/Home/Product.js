import React from 'react';

const Product = ({ subject }) => {
    const { name, img, price, description } = subject;

    return (
        <div>
            <img src={img} alt="" height={'300px'} width={'100%'} />
            <h3>Name: {name} </h3>
            <h5>Price: {price} </h5>
            <p>Description: {description} </p>

        </div>
    );
};

export default Product;