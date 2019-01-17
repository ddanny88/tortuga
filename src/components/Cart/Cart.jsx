import React, { Component } from 'react';
import CartItem from './Cart_Item/CartItem';
import { Link } from 'react-router-dom';
import { getCart, updateTax, updateTotal } from '../../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import './cart.css';



class Cart extends Component {
    
    componentDidMount() {
        this.props.getCart()
        this.calcTotals();
    }

    calcTotals = () => {
        let tax;
        let total;

        let base = this.props.cart.reduce((accumulator, element) => {
            return accumulator + (+element.price);
        }, 0)
        tax = base * 0.0825;
        total = base + tax;

        this.props.updateTax(tax)
        this.props.updateTotal(total)
    }

    



    deleteItem = (id) => {
        axios.delete(`/api/cart/${id}`)
            .then(()=> {
                this.props.getCart()
                .then(()=> {
                    this.calcTotals();
                })
            })
            .catch(err => {
                console.log(`**${err}**`)
            })
    }


    
    render() {
        console.log(this.props.cart)
        let cartItems = this.props.cart.map( item => {
            // console.log(item)
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
            <div className="cart-container">
                This is your cart.
                { cartItems }
                
                <hr className="cart_rule"/>
                    {/* total and tax will be held in the reducer.  */}
                <p className="total-text">tax: ${this.props.cart.length > 0 ? this.props.tax : 0.00}</p>
                <p className="total-text">total: ${this.props.cart.length > 0 ? this.props.total : 0.00}</p>
                
                <Link to="/checkout"><button className="checkout-button" >CHECKOUT</button></Link>
                {/* <TotalC /> */}
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    const {cart, tax, total} = state;
    return {
        cart,
        tax, 
        total
    }
}   

export default connect(mapStateToProps, { getCart, updateTax, updateTotal })(Cart);