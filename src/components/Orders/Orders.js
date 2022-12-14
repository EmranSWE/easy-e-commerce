import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
const Orders = () => {
    const [products,setProducts]=useProducts();
    const navigate=useNavigate();
    const [cart,setCart]=useCart();
    const handleRemoveProduct=product =>{
        const rest=cart.filter(pd =>pd._id !==product._id);
        setCart(rest);
        removeFromDb(product._id)
    }
    return (
        <div className='shop-container'>
            <div className="review-item-container">
        {
            cart.map(product => <ReviewItem key={product._id} product={product} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
        }
            </div>
            <div className="cart-container">
                <Cart cart={cart}><button className='upper' onClick={()=>navigate('/shipment')}>Shipment</button></Cart>
            </div>
            
        </div>
    );
};

export default Orders;