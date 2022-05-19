import React, { useEffect, useState } from 'react';

const ManageItem = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://frozen-basin-58605.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure delete item?')
        if (proceed) {
            const url = `https://frozen-basin-58605.herokuapp.com/item/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = books.filter(book => book._id !== id)
                    setBooks(remaining)
                })
        }
    }

    return (
        <div>
            <h5 className='text-center text-info my-3'>Product Manage Section</h5>
            {
                books.map(book => <div key={book._id}>
                    <h5>Name:{book.name} <button onClick={() => handleDelete(book._id)}>Delete Item</button></h5>
                </div>)
            }

        </div >
    );
};

export default ManageItem;