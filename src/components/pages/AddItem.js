import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result));

    };

    return (
        <div className='w-50 mx-auto'>
            <h5 className='text-center text-info my-3'>Product Add Section</h5>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='my-2' placeholder='Name' {...register("name")} />
                <textarea className='my-2' placeholder='Description' {...register("description")} />
                <input className='my-2' placeholder='Price' type="number" {...register("price")} />
                <input className='my-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;