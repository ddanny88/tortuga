import React from 'react';
import './product.css';
import image from '../../assets/product_imgs/patron.webp';


const Product = (props) => {
    return (
        <div className='product-card'>
            <div>
                <img 
                    src={image} 
                    alt={props.alt}
                    className="product-img"
                />
            </div>
            <p className="product-name">{props.productName}</p>
            <p className="product-price"> ${props.price}</p>
            <button className="card-btn"><i className="fas fa-cart-plus"></i></button>
        </div>
    )
}

export default Product;