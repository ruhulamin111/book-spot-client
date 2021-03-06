import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Subject.css'

const Subject = () => {
    const [subjects, setSubjects] = useState([])
    useEffect(() => {
        fetch('subject.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])
    return (
        <div id='subject'>
            <h3 className='text-white bg-info py-5 my-2 fw-bold text-center '>Subject Wise Product</h3>
            <div className='subject-part'>
                {
                    subjects.map(subject => <Product
                        key={subject.id}
                        subject={subject}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Subject;