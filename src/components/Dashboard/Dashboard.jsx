import React, { Component } from 'react';
import Product from '../Product/Products';
// import {getProducts} from '../../ducks/reducer';
import Login from '../Login/Login';
import { connect } from 'react-redux';

import'./dash.css';


class Dashboard extends Component {
    componentDidMount(){

    }
    render() {
        return (
            <div>
                <div className="hero-img">
                {
                    this.props.openModal? <Login /> : null
                }
                    <h1 className="main-heading">Hello</h1>
                    <button className="hero-btn">More Info</button>
                </div>
                <div className="middle-content">
                    <Product />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {openModal} = state;
    return {
        openModal
    }
}
export default connect(mapStateToProps)(Dashboard);