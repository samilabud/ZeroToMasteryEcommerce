import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle }  from '../../fireabase/firebase.utils';

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
        this.setState( {email: '',password: ''}
        )

    }
    handleOnChange = event => {
        const { value, name} = event.target;
        this.setState({ [name]:value})
    }
    render(){
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
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Iniciar Sesión Con Google</CustomButton>  
                    </div>
                    
                </form>
            </div>
            
        );
    }
}

export default SignIn;