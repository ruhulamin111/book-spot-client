import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = () => {

    const { bookId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://frozen-basin-58605.herokuapp.com/item/${bookId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    return (
        <div>
            <h3>Product Details: {item.name} </h3>
            <div className="text-center">
                <Link to='/inventory'>
                    <button className='text-center btn btn-info text-white'>Procced Inventory</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;