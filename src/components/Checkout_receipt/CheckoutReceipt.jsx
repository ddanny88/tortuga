import React, { Component } from 'react';
import Payment from '../Payment/Payment';
import'./side_receipt.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCurrentUsername, getCart, updateAdmin } from '../../ducks/reducer';

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
    


    handleOrder = () => {
        axios.post('/api/orderinfo')
            .then( () => {
                // console.log("response from orderInfo", response)
                axios.get('/api/auth/signout')
                    .then( () => {
                        this.props.updateCurrentUsername(null)
                        if(this.props.isAdmin){
                            this.props.updateAdmin(false);
                        }
                        this.props.getCart();
                    })
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
            <Link to="/receipt"><button className ="set-sail" onClick={this.handleOrder}>SET SAIL!</button></Link>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const  {isAdmin} = state;
    return {
        isAdmin
    }
}
export default connect(mapStateToProps, { updateCurrentUsername, getCart, updateAdmin })(CheckoutReceipt);