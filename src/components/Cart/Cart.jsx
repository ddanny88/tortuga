import React, { Component } from 'react';
import CartItem from './Cart_Item/CartItem';
import { getCart } from '../../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import './cart.css';

import CheckoutCard from '../CheckoutCard/CheckoutCard';

class Cart extends Component {
    
    componentDidMount() {
        this.props.getCart();
    }

    checkout = () => {
        console.log(this.props.cart);
       
    }
    deleteItem = (id) => {
        axios.delete(`/api/cart/${id}`)
            .then(() => {
                this.props.getCart();
            })
            .catch(err => {
                console.log(`**${err}**`);
            })
    }


    render() {
        console.log("this is the current cart :", this.props.cart)
        console.log("this is current props: ", this.props)
        let cartItems = this.props.cart.map( item => {
            // console.log(item)
           return (
            <CartItem 
                id={ item.product_id }
                key={ item.product_id }
                img={ item.img_url }
                name={ item.product_name }
                price={ item.price }
                deleteItem={ this.deleteItem }
            />)  
        });


        let item = this.props.cart[this.props.cart.length - 1]
        return (

            <div className="cart-container">
                This is your cart.


                <div className="middle-content">
                <div className="cart-itmes">
                    { cartItems }
                        <div className="checkout-botton-content">
                        <hr className="cart_rule"/>
                        <p className="total-text">tax: ${this.props.cart.length > 0 ? item.tax : 0.00}</p>
                        <p className="total-text">total: ${this.props.cart.length > 0 ? item.total : 0.00}</p>
                </div>
                </div>
                    <CheckoutCard />
                </div>
                
               
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    const { cart } = state;
    return {
        cart,
    }
}   

export default connect(mapStateToProps, { getCart })(Cart);


