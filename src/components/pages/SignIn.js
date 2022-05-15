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
        <div className='w-50 mx-auto '>
            <h5 className='text-center text-info my-2'>The Book Spot Sign In</h5>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                <Button className=' w-50' variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>

            <p className=''>New User to The Book Spot?  <Link to='/signup' className='text-decoration-none text-danger mt-2' onClick={navigateSignUp}>Please Sign Up </Link> </p>

            <p>Forget Your Password?<button className='btn btn-link b-none text-decoration-none text-primary p-1' onClick={resetPassword}>Reset Password</button></p>

            <SocialSignIn></SocialSignIn>

            <ToastContainer />
        </div>
    );
};

export default SignIn;