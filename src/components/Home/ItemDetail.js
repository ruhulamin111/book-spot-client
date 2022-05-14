import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        </div>
    );
};

export default ItemDetail;