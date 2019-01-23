import React, { Component } from 'react';
import Payment from '../Payment/Payment';
import { connect } from 'react-redux';
import {updateAddress, updateCity, updatePhone, updateState, updateZip} from '../../ducks/reducer';
import axios from 'axios';
import'./checkout.css';

class Checkout extends Component {


    // address, city, state, zip, phone
    handleAddress = (e) =>{
        this.props.updateAddress(e.target.value);
    }
    handleCity = (e) =>{
        this.props.updateCity(e.target.value);
    }
    handleState = (e) =>{
        this.props.updateState(e.target.value);
    }
    handleZip = (e) =>{
        this.props.updateZip(e.target.value);
    }
    handlePhone = (e) =>{
        this.props.updatePhone(e.target.value);
    }

    submitCheckoutInfo = () => {
        const { address, city, st, phone, zipcode } = this.props;
        axios.post('/api/checkoutinfo', { address, city, st, phone, zipcode })
            .then( (response) => {
                console.log(response)
            })
            .catch ( err => {
                console.log(err)
            })
    }



     render() {
        const {  phone, address, city, st, zipcode } = this.props;
        return (
            <div>
                <div className="checkout-container">
                   
                       <label>Address</label>
                        <input 
                            onChange={this.handleAddress}
                            className="checkout-input"
                            value={address}
                        />

                        <label>City</label>
                        <input 
                            onChange={this.handleCity}
                            className="checkout-input"
                            value={city}
                        />

                        <label>State</label>
                        <input 
                            onChange={this.handleState}
                            className="checkout-input"
                            value={st}
                        />

                        <label>Zipcode</label>
                        <input 
                            onChange={this.handleZip}
                            className="checkout-input"
                            value={zipcode}
                        />

                        <label>Phone</label>
                        <input type="phone" 
                            onChange={this.handlePhone}
                            className="checkout-input"
                            value={phone}
                        />

                        <button 
                        onClick ={this.submitCheckoutInfo}
                        className="checkout-btn">next></button>
                    <Payment />
                <hr/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { address, city, st, zipcode, phone } = state;
    return {
        address,
        city, 
        st,
        zipcode,
        phone
    }
}

export default connect(mapStateToProps, {updateAddress, updateCity, updatePhone, updateState, updateZip})(Checkout);