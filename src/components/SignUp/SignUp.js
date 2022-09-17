import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const SignUp = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');
    const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth);
    const navigate=useNavigate();

    if(user){
        navigate('/shop')
    }

    const handleEmailBlur= event =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur= event =>{
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur= event =>{
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your two password not match')
        }
        if(password.length<6){
            setError('Password must be 6 character')
            return;
        }
        createUserWithEmailAndPassword(email,password)
    }

    
    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Sign Up</h2>
   <form onSubmit={handleCreateUser}>
   <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="" id="" />
        </div>
        <div className="input-group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="" id="" />
        </div>
        <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="" id="" />
        </div>
        <p style={{color:'red'}}>{error}</p>
        <input className='form-submit' type="submit" value="Sign Up" />
         </form>
         <p>Already Have an Account? <Link className='form-link' to='/login'>Create Account</Link></p>
        </div>
    </div>
    );
};

export default SignUp;