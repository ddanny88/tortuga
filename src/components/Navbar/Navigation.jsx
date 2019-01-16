import React, {Component} from 'react';
import'./nav.css';
import {Link} from 'react-router-dom';
// import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import {toggleModal} from '../../ducks/reducer';


import logo from '../../assets/icons/blackout-logo.png';




class Navigation extends Component {
    // when login is clicked , openModal will open. 
    modal = () => {
        this.props.toggleModal(!this.props.openModal);
    }

    render(){
        return (
            <nav className="nav-bar-container">
            <div>
                <div><Link to="/"><img src={logo} alt="main-logo" className="main-logo"/></Link></div>
            </div>
            <div>
                    <ul className="main-nav">
                        <li><Link to="/"><button className="login-button" onClick={this.modal}>login</button></Link></li>
                        <li><Link to='/register'>signup</Link></li>
                        <li><Link to="/cart"><i className="fas fa-shopping-cart"></i></Link></li>
                    </ul>
            </div> 
        </nav>
        )
    }
}

const mapStateToProps = (state) => {
    const {openModal} = state;
    return {
        openModal
    }
}

export default connect(mapStateToProps, {toggleModal})(Navigation);

// modal: when the login button is clicked, modal: true, and the the login component is redered to the center of the screen. 

// you need an exit button, and perhaps a mini nav in the login page
