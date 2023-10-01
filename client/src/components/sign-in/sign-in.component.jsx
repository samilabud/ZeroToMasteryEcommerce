import React, {useState} from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions.js';
import { selectLoginError } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import './sign-in.styles.scss';

const SignIn = ({emailSignInStart, googleSignInStart, formError}) =>{
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
            <h2>I currently have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} autoComplete="off">
                <FormInput 
                    name="email" 
                    type="email" 
                    value={email} 
                    handleChange={handleOnChange}
                    label="Email"
                    required 
                />
                <FormInput name="password" type="password" 
                    value={password} 
                    handleChange={handleOnChange} 
                    label="Password"
                    required />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>  
                </div>
                { formError &&
                    (<div className='form-error'>{formError}</div>) }
            </form>
        </div>
        
    );
}
const mapStateToProps = createStructuredSelector ({
    formError: selectLoginError
})
const mapDispatchProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
})

export default connect(mapStateToProps, mapDispatchProps)(SignIn);