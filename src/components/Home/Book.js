import React, { useEffect, useState } from 'react';
import Item from './Item';
import './Book.css'

const Book = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('book.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    return (
        <div id='book' className='' >
            <h3 className='text-white bg-info py-5 my-2 fw-bold text-center ' >Collection of Books</h3>
            <div className='book-part'>
                {
                    books.map(book => <Item
                        key={book.id}
                        book={book}
                    ></Item>)

                }
            </div>
        </div>
    );
};

export default Book;