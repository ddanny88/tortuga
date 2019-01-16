import React, { Component } from 'react';
import './Cart_item.css';

// import image from '../../../assets/product_imgs/henny.webp';


class CartItem extends Component {
    render() {
        const { name, price } = this.props;
        return (
            <div className="cart-card">
               <div>
                    <img 
                        src={ this.props.img } 
                        alt="product"
                        className="cart-product-img"
                    />
               </div>
               <div className="cart-card-content">
                    <p>{ name }</p>
                    <p>$ { price }</p>
                    <button id="remove-button">remove from cart</button>
               </div>
            </div>
        );
    }
}

export default CartItem;