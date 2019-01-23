import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {updateAddress, updateCity, updatePhone, updateState, updateZip} from '../../ducks/reducer';
import axios from 'axios';
import './checkoutcard.css';

class CheckoutCard extends Component {


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
            });
    }



     render() {
        const {  phone, address, city, st, zipcode } = this.props;
        return (
            <div>
                <div className="checkout-container">
                   
                       <div className="first-content">
                        
                                <input
                                placeholder=" address"
                                    onChange={this.handleAddress}
                                    className="checkout-input"
                                    value={address}
                                />

                
                                <input
                                placeholder=" city"
                                    onChange={this.handleCity}
                                    className="checkout-input"
                                    value={city}
                                />
                       </div>

                        <div className="second-content">
                    
                                <input
                                placeholder=" state"
                                    onChange={this.handleState}
                                    className="checkout-input"
                                    value={st}
                                />

                            
                                <input
                                placeholder=" zipcode"
                                    onChange={this.handleZip}
                                    className="checkout-input"
                                    value={zipcode}
                                />

                    
                                <input
                                placeholder=" phone"
                                 type="phone" 
                                    onChange={this.handlePhone}
                                    className="checkout-input"
                                    value={phone}
                                />
                        </div>


                      <div>
                        <Link to="/receipt">
                                <button 
                                    onClick ={this.submitCheckoutInfo}
                                    className="checkout-btn">next>
                                </button>
                            </Link>
                      </div>
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

export default connect(mapStateToProps, {updateAddress, updateCity, updatePhone, updateState, updateZip})(CheckoutCard);