import React, { Component } from 'react';
import Payment from '../Payment/Payment';
import'./side_receipt.css';
import axios from 'axios';

class CheckoutReceipt extends Component {
    constructor(props){
        super(props);
        this.state ={
            cart: []
        }
    }

    componentDidMount(){
        axios.get("/api/getcart")
            .then(response => {
                this.setState({
                    cart: response.data
                })
            })
    }
    


    handleTest = () => {
        axios.get('/api/orderinfo')
            .then( response => {
                console.log(response)
            })  
            .catch( err => {
                console.log("****", err)
            })
    }
    render() {
        let drinks = this.state.cart.map( drank => (
            <p>{drank.product_name}...${drank.price}</p>
        ));
        let item = this.state.cart[this.state.cart.length -1]
        let total = 0;
        let tax = 0;
        if(item){
            total = item.total;
            tax = item.tax;
        }
        return (
            <div className='side-receipt'>
             
            <p>item(s): {this.state.cart.length}</p>
                {drinks}
            <hr className="receipt-rule"/>
            <p>tax: ${tax}</p>
            <p>total: ${total}</p>
            <Payment />
            <button onClick={this.handleTest}>  test  </button>

            </div>
        );
    }
}

export default CheckoutReceipt;