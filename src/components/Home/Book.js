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
            <h3>this is book part</h3>
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