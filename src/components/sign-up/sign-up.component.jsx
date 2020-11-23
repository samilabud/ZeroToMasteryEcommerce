import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument } from '../../fireabase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        
        if(password !== confirmPassword){
            alert("La contraseña no coincide con la confirmación.");
            return;
        }
        try{
           
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(error){
            console.log(error);
        }        
    }

    handleChange = event => {
        
        const {name, value} = event.target;
        this.setState({[name]:value});
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>No tengo una cuenta</h2>
                <span>Registrate con tu correo electronico y contraseña</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange} 
                        label="Nombre"
                        required
                    />
                    <FormInput 
                        type='text'
                        name="email"
                        value={email}
                        handleChange={this.handleChange} 
                        label="Correo Electrónico"
                        required
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange} 
                        label="Contraseña"
                        required
                    />
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange} 
                        label="Confirmar Contraseña"
                        required
                    />

                    <CustomButton type="submit">Registrarse</CustomButton>
                </form>
            </div>
        )
    }
}   
export default SignUp;