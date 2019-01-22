import React, { Component } from 'react';
import ChartComponent from '../Chart/ChartComponent';
import axios from 'axios';
import { connect } from 'react-redux';
import { addProductName, addProductPrice, addProductCategory, addProductImgUrl, clearInput } from '../../ducks/reducer';
import'./admin.css';




class Admin extends Component {
    constructor(){
        super();
        this.state = {
            displayAddItem: false
        }
    }

    displayControl = () => {
        this.setState({
            displayAddItem: !this.state.displayAddItem
        });
    }
    addNewProduct = () => {
        const { productName, price, category, img_url } = this.props;
        // console.log(productName, price, category, img_url);
        axios.post('/api/addproduct', { productName, price, category, img_url} );
        this.props.clearInput();
    }
    handleCancel = () => {
        this.displayControl();
    }

    handleProductName = (e) => {
       this.props.addProductName(e.target.value);
    }

    handlePrice = (e) => {
        this.props.addProductPrice(e.target.value);
    }

    handleCategory = (e) => {
        this.props.addProductCategory(e.target.value);
    }

    handleImgUrl = (e) => {
        this.props.addProductImgUrl(e.target.value);
    }


    

    render() {
        const { productName, price, category, img_url } =  this.props;
        return (
            <div className="admin-container">
                This is the Admin page:

                <ChartComponent />

                <div>
                    <hr className="admin-rule"/>
                   
                </div>
                <div className="admin-control">
                    Admin Controls: 
                    <button className="control-button" onClick={this.displayControl}>Add Item</button>
                </div>
                {this.state.displayAddItem ? (
                    <div className="item-form">

                    <img 
                        src={this.props.img_url ? img_url :"https://s3.us-east-2.amazonaws.com/tortuga-assets/placeholderBottle.svg"} alt="product"
                        className="placeholder_img"
                    />

                        <input 
                            placeholder=" product name" 
                            onChange={this.handleProductName} 
                            value={ productName } 
                        />
                        <input 
                            placeholder=" price" 
                            onChange={this.handlePrice}
                            value={ price } 
                        />
                        <input 
                            placeholder=" category" 
                            onChange={this.handleCategory}
                            value={ category }
                        />
                        <input 
                            placeholder=" image_url"
                            onChange={this.handleImgUrl} 
                            value={ img_url }
                        />
                        
                      <div>
                        <button className="form-btn" onClick={this.handleCancel}>cancel</button>
                        <button className="form-btn" onClick={this.addNewProduct}>submit</button>
                      </div>
                    </div>
                ) : null}
                <hr/>
                ORDER LOOKUP: access certain order through form that querys the orders database
            </div>
        );
    }
}

function mapStateToProps(state){
    const  { productName, price, category, img_url } = state;
    return {
        productName, 
        price,
        category,
        img_url
    }
}

export default connect(mapStateToProps,{ addProductName, addProductPrice, addProductCategory, addProductImgUrl, clearInput })(Admin);

