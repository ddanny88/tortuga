import React, { Component } from 'react';
import axios from 'axios';
import './order.css';

class OrderLookup extends Component {
    constructor(){
        super();
        this.state = {
            orderId: 0,
            customer: {},
            search: false
        }
    }

    getOrder = () => {
        const { orderId } = this.state;
        axios.post('/api/getorderinfo', { orderId })
        .then(response => {
            console.log(response.data)
            this.setState({
                customer: response.data,
                search: !this.state.search
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    handleOrder = (e) => {
        this.setState({
            orderId: e.target.value
        })
    }

    handleCancel = () => {
        this.setState({
            search: !this.state.search
        })
    }
    render() {
        const { firstname, lastname, order_date, order_total, product_category } = this.state.customer
        return (
            <div>
                <div className="search-order">
                    <input 
                        className="order-search"
                        type="text"
                        onChange={this.handleOrder}
                        value={this.state.orderId}
                    />
                    <button className="order_search" onClick={this.getOrder}>search orders</button>
                </div>
                {this.state.search ? (
                    <div className="order">
                        <h1>ORDER #{this.state.orderId}</h1>
                        <h2>Name: {lastname}, {firstname}</h2>
                        <p><span className="span-style">Category:</span> {product_category}</p>
                        <p><span className="span-style">Order Total:</span> {order_total}</p>
                        <p><span className="span-style">Order Date: </span>{order_date}</p>
                        <button className="exit-btn" onClick={this.handleCancel}>exit</button>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default OrderLookup;