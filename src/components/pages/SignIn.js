import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialSignIn from './SocialSignIn';

const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();


    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

    const navigateSignUp = event => {
        navigate('/signup')
    }

    return (
        <div>
            <h3>this is SignIn form </h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <p className=''>New to The Book Spot?  <Link to='/signup' className='' onClick={navigateSignUp}>Please SignUp</Link> </p>

            <SocialSignIn></SocialSignIn>

        </div>
    );
};

export default SignIn;