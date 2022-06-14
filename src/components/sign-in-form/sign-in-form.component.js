import React from 'react';
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';

import './sign-in-form.styles.scss';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import Swal from 'sweetalert2';

import usePasswordToggle from '../password-visibilty-hook/usePasswordToggle';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      };

      const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          dispatch(emailSignInStart(email, password));
          resetFormFields();
          
        } catch(error) {
            switch(error.code) {

                case 'auth/wrong-password': 
                Swal.fire({
                    icon: 'ERROR',
                    title: 'Oops...',
                    text: 'Incorrect Password!',
                  })
                    break
                    case 'auth/user-not-found':
                    Swal.fire({
                    icon: 'ERROR',
                    title: 'Oops...',
                    text: 'Email Not Found!',
                  })
                    break;
                    default:
                    console.log(error);
            }
        }
    };
    
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return(
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span  className='p1'>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}> 
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
                value={password}
                />

                <span className='password-toggle-icon'>{ToggleIcon}</span>
                

            <div className='buttons-container'>
            <Button type="submit">SIGN IN</Button>
            <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} 
            onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
            <p>Don't have an account?<Link to='/sign-up-auth'><p>Click Here!</p></Link></p>
               
            </form>

        </div>
    );
};

export default SignInForm;