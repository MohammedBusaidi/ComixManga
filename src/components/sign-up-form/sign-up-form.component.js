
import { useState } from 'react';
import { useDispatch } from 'react-redux';


import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { signUpStart } from '../../store/user/user.action';

import './sign-up-form.styles.scss';
import Swal from 'sweetalert2';

import usePasswordToggle from '../password-visibilty-hook/usePasswordToggle';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmpassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmpassword } = formFields;
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();
    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit  = async (event) => {
        event.preventDefault();

        if(password !== confirmpassword) {
            Swal.fire({
                icon: 'ERROR',
                title: 'Oops...',
                text: 'Password does not match!',
              })
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName));
            resetFormFields();
        } 
        catch(error) {
            if(error.code === 'auth/email-already-in-use' ) {
                alert("Cannot create user, email already in use");
                
            } //if (error.code === 'auth/weak-password'){
            //     alert("Password must be 6 characters or more");

             //}
             else{
            console.log('user creation encountered an error', error);
            }
        }
    };
    
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return(
        <div className='sign-up-container'>
            <h2>Dont have an account?</h2>
            <span className='p1'>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}> 
                <FormInput 
                label="Display Name"
                type="text" 
                required 
                onChange={handleChange}
                name="displayName"
                value={displayName} />

                <FormInput
                label="Email"
                type="email" 
                required
                onChange={handleChange} 
                name="email" 
                value={email}/>

                <FormInput
                label="Password"
                type={PasswordInputType}
                required
                onChange={handleChange}
                name="password" 
                value={password}/>

                <FormInput 
                label="Confirm Password"
                type={PasswordInputType}
                required 
                onChange={handleChange}
                name="confirmpassword" 
                value={confirmpassword}/>

                <span className='password-toggle-icon'>{ToggleIcon}</span>

                <Button className='buttons-container-sign-up' type="submit">SIGN UP</Button>
            </form>

        </div>
    );
};

export default SignUpForm;