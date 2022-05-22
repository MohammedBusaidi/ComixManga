import { useState} from 'react';
import FormInput from '../form-input/form-input.component';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import './sign-in-form.styles.scss';
import Button from '../button/button.component';
import Swal from 'sweetalert2';
import usePasswordToggle from '../password-visibilty-hook/usePasswordToggle';
import { Link } from 'react-router-dom';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password, } = formFields;
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        
    };

    const handleSubmit  = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } 
        catch(error) {
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
            <span>Sign in with your email and password</span>
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
            <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
            <p>Don't have an account?<Link to='/sign-up-auth'><p>Click Here!</p></Link></p>
               
            </form>

        </div>
    );
};

export default SignInForm;