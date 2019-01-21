import React, { Component } from 'react';
import ChartComponent from '../Chart/ChartComponent';
import axios from 'axios';
import'./admin.css';




class Admin extends Component {
    constructor(){
        super();
        this.state = {
            productName: '',
            displayAddItem: false
        }
    }

    displayControl = () => {
        this.setState({
            displayAddItem: !this.state.displayAddItem
        });
    }

    handleCancel = () => {
        this.displayControl()
    }

    handleProductName = (e) => {
        this.setState({
            productName: e.target.value
        });
    }

    addNewProduct = () => {
        axios.post('/api/addproduct');
    }
    render() {
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
                        <input placeholder=" product name" onChange={this.handleProductName} value={this.state.productName} />
                        <input placeholder=" price" />
                        <input placeholder=" category" />
                        <input placeholder=" image_url" />
                        
                      <div>
                        <button className="form-btn" onClick={this.handleCancel}>cancel</button>
                        <button className="form-btn">submit</button>
                      </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Admin;