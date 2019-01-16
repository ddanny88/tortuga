import React, { Component } from 'react';
import Product from '../Product/Products';
import { getProducts } from '../../ducks/reducer';
import { connect } from 'react-redux';
import './middle_content.css';


class MiddleContent extends Component {

    componentDidMount(){
        this.props.getProducts();
    }












    render() {
        let dranks = this.props.products.map( drank => ( console.log(typeof drank) ||
            <Product 
                key={drank.id}
                img={drank.img_url}
                alt={drank.product_name}
                productName={drank.product_name}
                price={drank.price}
                category={drank.category}
                drink={drank}
            />
        ));



        return (
            <div id="middle-content">
                {dranks}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const { products } = state;
    return {
        products
    }
}
export default connect(mapStateToProps, {getProducts})(MiddleContent);