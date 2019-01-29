import React from 'react';
import './product.css';
import { addToCart } from '../../ducks/reducer';
import { connect } from 'react-redux';




const Product = (props) => {

    return (
        <div className='product-card'>
            <div>
                <img 
                    src={ props.img } 
                    alt={ props.alt }
                    className="product-img"
                />
            </div>
            <p className="product-name">{ props.productName }</p>
            <p className="product-price"> ${ props.price }</p>
            
            <button 
                onClick={() => props.addToCart(props.drink)}
                className="card-btn">
                <i className="fas fa-cart-plus"></i>
            </button>
            <div className="shadow">

            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        state
    }
}
export default connect(mapStateToProps, {addToCart})(Product);