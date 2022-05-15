import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialSignIn from './SocialSignIn';

const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password)
        navigate('/home')
    }

    const navigateSignIn = event => {
        navigate('/signin')
    }



    return (
        <div className='w-50 mx-auto'>
            <h5 className='text-center text-info my-2'>The Book Spot Sign Up</h5>
            <Form onSubmit={handleSignUp}>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                <Button className=' w-50' variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>

            <p className='my-3'>Have an The Book Spot Account?  <Link to='/signin' className='text-decoration-none text-danger mt-2' onClick={navigateSignIn}>Please Sign In</Link></p>

            <SocialSignIn></SocialSignIn>
        </div>
    );
};

export default SignUp;