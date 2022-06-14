import React from 'react';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import './authentication.styles.scss';

const SignUpAuth = () => {
    return (
        <div className='authentication-container'>
            <SignUpForm />
        </div>
    );
};

export default SignUpAuth;