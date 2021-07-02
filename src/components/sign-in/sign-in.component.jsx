import React from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions.js';

import './sign-in.styles.scss';

class SignIn extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const {email, password} = this.state;
        emailSignInStart(email, password);

    }
    handleOnChange = event => {
        const { value, name} = event.target;
        this.setState({ [name]:value})
    }
    render(){
        const { googleSignInStart } = this.props;
        return (
            <div className='sign-in'>
                <h2>Actualmente tengo una cuenta</h2>
                <span>Inicia sesión con tu correo y contraseña</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" 
                        value={this.state.email} 
                        handleChange={this.handleOnChange}
                        label="Correo"
                        required />
                    <label>   </label>
                    <FormInput name="password" type="password" 
                        value={this.state.password} 
                        handleChange={this.handleOnChange} 
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
}
const mapDispatchProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchProps)(SignIn);