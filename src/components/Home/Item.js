import React from 'react';
import { useNavigate } from 'react-router-dom';


const Item = ({ book }) => {
    const { id, img, name, price, supplier, description, quantity } = book;
    const navigate = useNavigate();
    const itemDetail = id => {
        navigate(`/book/${id}`)
    }
    return (
        <div>
            <img src={img} alt="" height={'300px'} width={'100%'} />
            <h3>Name: {name} </h3>
            <h5>Price: {price} </h5>
            <h5>Quantity: {quantity} </h5>
            <h6>Supplier:{supplier} </h6>
            <p>Description: {description} </p>
            <button onClick={() => itemDetail(id)} >Add: {name} </button>

        </div>
    );
};

export default Item;