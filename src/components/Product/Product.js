import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = ({product,handleAddToCart}) => {
    const {img,seller,name,price,rating}=product;
    
    
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className="product-info"> <h3>{name}</h3> 
            <p>${price}</p>
            <p><small>Seller:{seller}</small></p>
            <p>{rating}</p>
            </div>
            <button className='btn-cart' onClick={()=>handleAddToCart(product)}>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;