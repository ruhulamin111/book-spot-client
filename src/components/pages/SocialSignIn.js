import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    if (user) {
        navigate('/home');
    }

    return (

        <div>
            <h3>this is socail login </h3>
            <div>
                <button onClick={() => signInWithGoogle()} className=''>Google Sign In</button>

            </div>
        </div>
    );
};

export default SocialSignIn;