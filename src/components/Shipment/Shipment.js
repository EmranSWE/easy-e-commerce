import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user]=useAuthState(auth)
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState('');
    const [error,setError]=useState('');
   const navigate=useNavigate();


    const handleNameBlur =event =>{
        setName(event.target.value)
    }
    const handleAddressBlur= event =>{
        setAddress(event.target.value)
    }
    const handlePhoneBlur= event =>{
        setPhone(event.target.value)
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        const shipping ={name,email,address,phone}
        navigate('/orders')
    }

    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Shipping Information</h2>
   <form onSubmit={handleCreateUser}>
   <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input onBlur={handleNameBlur} type="text" name="" id=""  required/>
        </div>
        <div className="input-group">
            <label htmlFor="address">Address</label>
            <input onBlur={handleAddressBlur} type="text" name="" id="" required/>
        </div>
        <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input value={user?.email} readOnly type="email" name="" id="" />
        </div>
        <div className="input-group">
            <label htmlFor="phone">Your Phone</label>
            <input onBlur={handlePhoneBlur} type="text" name="" id="" required/>
        </div>
        <p style={{color:'red'}}>{error}</p>
        <input className='form-submit' type="submit" value="Add Shipping" />
         </form>
         
        </div>
    </div>
    );
};

export default Shipment;