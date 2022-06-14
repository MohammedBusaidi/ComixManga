import React from 'react';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';

const SignInAuth = () => {
    return (
        <div className='authentication-container'>
            <SignInForm />
        </div>
    );
};

export default SignInAuth;