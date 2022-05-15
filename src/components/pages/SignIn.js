import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialSignIn from './SocialSignIn';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    if (user) {
        navigate(from, { replace: true });
    }


    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {

            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Enter your email')
        }
    }


    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
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

            <p>Forget Password?  <button className='' onClick={resetPassword}>Reset Password</button> </p>

            <SocialSignIn></SocialSignIn>

            <ToastContainer />
        </div>
    );
};

export default SignIn;