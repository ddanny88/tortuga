import React, { Component } from 'react';
import CartItem from './Cart_Item/CartItem';
import './cart.css';

class Cart extends Component {
    constructor(){
        super();
        this.state = {
            cart: []
        }
    }






    render() {
        return (
            <div className="cart">
                This is your cart.
                <CartItem />
                <CartItem />
                <CartItem />
                


                <hr className="cart_rule"/>
                <p className="total-text">tax: $</p>
                <p className="total-text">total: $</p>

                <button className="checkout-button" >CHECKOUT</button>
            </div>
        );
    }
}

export default Cart;