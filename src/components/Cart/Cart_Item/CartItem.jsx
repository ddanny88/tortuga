import React, { Component } from 'react';
import './Cart_item.css';

// import image from '../../../assets/product_imgs/henny.webp';


class CartItem extends Component {


    // deleteItem = (id) => {
    //     axios.delete(`/api/cart/${id}`)
    // }


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
                    <p className="product-text" >{ name }</p>
                    <p className="product-text" >$ { price }</p>
                    <button id="remove-button" onClick={()=> this.props.deleteItem(this.props.id)}>remove from cart</button>
               </div>
            </div>
        );
    }
}

export default CartItem;