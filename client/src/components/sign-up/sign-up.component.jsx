import React, {useState} from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signupStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const SignUp = ({signupStart}) => {
    const [userData, setUserData] = useState({displayName:'',email:'',password:'',confirmPassword:''})
            // displayName: '',
            // email: '',
            // password: '',
            // confirmPassword: ''
    const {displayName, email, password, confirmPassword} = userData;

    const handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = userData;
        
        if(password !== confirmPassword){
            alert("La contraseña no coincide con la confirmación.");
            return;
        }
        try{
            signupStart(displayName,email, password);
            
        }catch(error){
            console.log(error);
        }        
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setUserData({...userData,[name]:value})
    }


    return(
        <div className='sign-up'>
            <h2 className='title'>No tengo una cuenta</h2>
            <span>Registrate con tu correo electronico y contraseña</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={handleChange} 
                    label="Nombre"
                    required
                />
                <FormInput 
                    type='text'
                    name="email"
                    value={email}
                    handleChange={handleChange} 
                    label="Correo Electrónico"
                    required
                />
                <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange} 
                    label="Contraseña"
                    required
                />
                <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={handleChange} 
                    label="Confirmar Contraseña"
                    required
                />

                <CustomButton type="submit">Registrarse</CustomButton>
            </form>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    signupStart: (displayName, email, password) => dispatch (signupStart({displayName,email,password}))
})
export default connect(null, mapDispatchToProps)(SignUp);