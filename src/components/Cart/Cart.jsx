import React, { Component } from 'react';
import CartItem from './Cart_Item/CartItem';
import './cart.css';
import { getCart } from '../../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';

class Cart extends Component {
    
    componentDidMount() {
        this.props.getCart()
    }


    deleteItem = (id) => {
        axios.delete(`/api/cart/${id}`)
            .then(()=>{
                this.props.getCart()
            })
            .catch(err =>{
                console.log(`**${err}**`)
            })
    }


    
    render() {
        console.log(this.props.cart)
        let cartItems = this.props.cart.map( item => {
            console.log(item)
           return (
            <CartItem 
                id={item.product_id}
                key={item.product_id}
                img={item.img_url}
                name={item.product_name}
                price={item.price}
                deleteItem={this.deleteItem}
            />)  
        });
        return (
            <div className="cart">
                This is your cart.
                { cartItems }
                
                <hr className="cart_rule"/>

                <p className="total-text">tax: $</p>
                <p className="total-text">total: $</p>
                
                <button className="checkout-button" >CHECKOUT</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {cart} = state;
    return {
        cart
    }
}   

export default connect(mapStateToProps, {getCart})(Cart);