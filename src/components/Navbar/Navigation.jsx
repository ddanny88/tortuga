import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleModal, toggleContent, updateCurrentUsername } from '../../ducks/reducer';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import axios from 'axios';
import'./nav.css';



class Navigation extends Component {   
   
    handleModal = () => {
        this.props.toggleModal(!this.props.openModal);
        this.props.toggleContent(!this.props.displayLoginContent)
    }
   
    signOut = () => {
        axios.get('/api/auth/signout')
        .then(() => {
            this.props.updateCurrentUsername(null)
        })
    }

    render(){
        return (
            <nav className="nav-bar-container">
                <div>
                    <div><Link to="/">
                    <img src="https://s3.us-east-2.amazonaws.com/tortuga-assets/blue-logo.png" 
                        alt="main-logo" 
                        className="main-logo"
                    /></Link></div>
                </div>
                <div>
                        <ul className="main-nav">
                            {this.props.currentUsername ? <li className="current_user"> @{this.props.currentUsername}</li>: <li><Link to="/"><button className="login-button" onClick={ this.handleModal }>login</button></Link></li>}
                            {this.props.currentUsername ? <li><button className="sign_out_button" onClick={this.signOut}>sign out</button></li>: null}
                            <li><Link to='/register'>signup</Link></li>
                            <li><Link to="/cart"><i className="fas fa-shopping-cart"></i></Link></li>
                        </ul>
                </div> 
                <Modal display={ this.props.openModal } toggleDisplay={ this.handleModal }  ModalContent={ Login } />
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    const { openModal, displayLoginContent, currentUsername } = state;
    return {
        openModal, 
        displayLoginContent, 
        currentUsername
    }
}

export default connect(mapStateToProps, { toggleModal, toggleContent, updateCurrentUsername })(Navigation);

// modal: when the login button is clicked, modal: true, and the the login component is redered to the center of the screen. 

// you need an exit button, and perhaps a mini nav in the login page
