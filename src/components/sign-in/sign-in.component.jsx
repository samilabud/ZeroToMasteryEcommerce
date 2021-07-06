import React, {useState} from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions.js';

import './sign-in.styles.scss';

const SignIn = ({emailSignInStart, googleSignInStart}) =>{
   const [userCredentials, setCredentials] = useState({email:'',password:''});
   
   const {email, password} = userCredentials;

   const handleSubmit = event => {
        event.preventDefault();
        const {email, password} = userCredentials;
        emailSignInStart(email, password);

    }
    const handleOnChange = event => {
        const { value, name} = event.target;
        setCredentials({...userCredentials,[name]:value})

    }
    return (
        <div className='sign-in'>
            <h2>Actualmente tengo una cuenta</h2>
            <span>Inicia sesión con tu correo y contraseña</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" 
                    value={email} 
                    handleChange={handleOnChange}
                    label="Correo"
                    required />
                <label>   </label>
                <FormInput name="password" type="password" 
                    value={password} 
                    handleChange={handleOnChange} 
                    label="Contraseña"
                    required />
                <div className='buttons'>
                    <CustomButton type='submit'>Iniciar Sesión</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Entrar con Google</CustomButton>  
                </div>
                
            </form>
        </div>
        
    );
}
const mapDispatchProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchProps)(SignIn);