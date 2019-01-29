import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleModal, toggleContent, updateCurrentUsername, toggleFormDisplay, updateAdmin, getCart } from '../../ducks/reducer';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import axios from 'axios';
import'./nav.css';
// import PropTypes from 'prop-types';

class Navigation extends Component { 

    componentDidMount(){
        axios.get('/api/getfullsession')
        .then(response => {
            if(response.data.user.isAdmin){
                this.props.updateAdmin(response.data.user.isAdmin)
            }
            this.props.getCart()
        })
        .catch(err => {
            console.log(err)
        });
    } 
    
    // componentDidMount(){
    //     this.props.getCart()
    //     window.addEventListener("scroll", this.handleScroll)
    // }
    // // scroll animation: references the parent element in the component: 
    // handleScroll = () => {
    //      requestAnimationFrame(()=> {
    //          if(window.scrollY>200){
    //             this.nav.current.style.position = "sticky";
    //             this.nav.current.style.top = "0";
    //          } else{
    //              this.nav.current.style.position = "static"
    //          }
    //      })
    // }
    // nav = React.createRef()

   
   
    handleModal = () => {
        this.props.toggleModal(!this.props.openModal);
    }
   
    signOut = () => {
        axios.get('/api/auth/signout')
            .then(() => {
                this.props.updateCurrentUsername(null)
                if(this.props.isAdmin){
                    this.props.updateAdmin(false);
                }
                this.props.getCart();
            })
    }

    render(){
        console.log(this.props.cart)
        let cartLength = this.props.cart.length;
        return (
            <nav className="nav-bar-container" ref={this.nav}>
                <div>
                    <div><Link to="/">
                    <img src="https://s3.us-east-2.amazonaws.com/tortuga-assets/text-only-logo.png" 
                        alt="main-logo" 
                        className="main-logo"
                    /></Link></div>
                </div>
                <div>
                        <ul className="main-nav">
                            {this.props.currentUsername ? <li className="current_user"> @{this.props.currentUsername}</li> : <li><Link to="/"><button className="login-button" onClick={ this.handleModal }>login</button></Link></li>}
                            {this.props.currentUsername ? <li><button className="sign_out_button" onClick={this.signOut}>sign out</button></li>: null}
                          
                            {!this.props.isAdmin ? (
                               <>
                                <div className="item-count"></div>
                                <div className="item-count1">{cartLength}</div>
                               </>
                            ) : (
                                <>
                                <div className="item-count hide-count-icon"></div>
                                <div className="item-count1 hide-count-icon">{cartLength}</div>
                                </>
                            )}

                            {this.props.isAdmin ? <li><Link to="/login/admin"><button className="dash-btn">T</button></Link></li> : <li><Link to="/cart"><i className="fas fa-shopping-cart"></i></Link></li> }
                        </ul>
                </div> 
                <Modal display={ this.props.openModal } toggleDisplay={ this.handleModal }  ModalContent={ Login } />
            </nav>
        )
    }
}


const mapStateToProps = (state) => {
    const { openModal, displayLoginContent, currentUsername, isAdmin, cart } = state;
    return {
        openModal, 
        displayLoginContent, 
        currentUsername,
        isAdmin,
        cart
    }
}


export default connect(mapStateToProps, { toggleModal, toggleContent, updateCurrentUsername, toggleFormDisplay, updateAdmin, getCart})(Navigation);
