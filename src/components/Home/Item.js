import React from 'react';
import { useNavigate } from 'react-router-dom';
import './item.css'


const Item = ({ book }) => {
    const { _id, img, name, price, supplier, description, quantity } = book;
    const navigate = useNavigate();
    const itemDetail = id => {
        navigate(`/book/${id}`)
    }
    return (
        <div className='item-part'>
            <img src={img} alt="" height={'300px'} width={'100%'} />
            <h5 className='my-2'>Name: {name} </h5>
            <h5 className='my-2'>Price: {price} </h5>
            <h5 className='my-2'>Quantity: {quantity} </h5>
            <h6 className='my-2'>Supplier:{supplier} </h6>
            <p>Description: {description} </p>
            <button className='btn btn-info fs-5' onClick={() => itemDetail(_id)} >Explore: {name} </button>

        </div>
    );
};

export default Item;