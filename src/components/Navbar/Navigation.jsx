import React, {Component} from 'react';
import'./nav.css';
import {Link} from 'react-router-dom';
// import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import {toggleModal} from '../../ducks/reducer';




class Navigation extends Component {
    // when login is clicked , openModal will open. 
    modal = () => {
        this.props.toggleModal();
    }

    render(){
        return (
            <nav className="nav-bar-container">
            <div>
                <div className="main-logo">logo</div>
            </div>
            <div>
                    <ul className="main-nav">
                        <li><button className="login-button" onClick={this.modal}>login</button></li>
                        <li><Link to='/register'>signup</Link></li>
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
