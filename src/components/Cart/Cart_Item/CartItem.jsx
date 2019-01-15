import React, { Component } from 'react';
import './Cart_item.css';

import image from '../../../assets/product_imgs/henny.webp';


class CartItem extends Component {
    render() {
        return (
            <div className="cart-card">
               <div>
                    <img 
                        src={image} 
                        alt="product"
                        className="cart-product-img"
                    />
               </div>
               <div className="cart-card-content">
                    <p>product name</p>
                    <p>product $20.00</p>
                    <button id="remove-button">remove from cart</button>
               </div>
            </div>
        );
    }
}

export default CartItem;