import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart}=props;
    let total=0;
    let shipping=0;
    let quantity=0;
    for (const product of cart){
        quantity=quantity+product.quantity;
        total=total+product.price *product.quantity;
        shipping=shipping+product.shipping;
    }
    const tax=(total*0.1).toFixed(2);
    const grandTotal=total+shipping+parseFloat(tax)
    return (
        <div className='cart'>
            <h1>Order Summery  </h1>
            <p>Selected Items:{quantity}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping Charge:${shipping}</p>
            <p>Tax:{tax}</p>
            <h3>Grand Total:{grandTotal.toFixed(2)}</h3>
            <h4 >{props.children}</h4>
            <button className='upper'>Clear Cart</button>
            <br />
            <button className='upper'>Review Order</button>
        </div>
    );
};

export default Cart;