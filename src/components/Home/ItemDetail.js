import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = () => {
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
            <h3>this is item detail: {bookId} </h3>
            <div className="">
                <Link to='/inventory'>
                    <button className=''>Procced Inventory</button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;