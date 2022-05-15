import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const ItemDetail = () => {
    const [user] = useAuthState(auth)


    const { bookId } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:3000/book/${bookId}`
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