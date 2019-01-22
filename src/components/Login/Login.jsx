import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUsername, updatePassword, updateCurrentUsername, toggleFormDisplay, toggleModal } from '../../ducks/reducer';
import axios from 'axios';
import './login.css';

 import logo from '../../assets/icons/blackout-logo.png';



class Login extends Component {


    handleUsername = (e) => {
        this.props.updateUsername(e.target.value)
    }
    handlePassword = (e) => { 
        this.props.updatePassword(e.target.value)
    }


    componentDidMount(){
        if(!this.props.currentUsername){
            axios.get('/api/getusername')
            .then( user => {
                this.props.updateCurrentUsername(user.data.username)
            });  
        }
    }

    updateCurrentUser = (username) => {
        this.props.updateCurrentUsername(username)
    }


    login = (e) => {
       const { username, password } = this.props;
       e.preventDefault()
        axios.post('/api/auth/login', { username, password })
            .then( user => {
                console.log(user)
                this.updateCurrentUser(user.data.username)
                this.props.toggleModal(false);
            }) 
            .catch(err => {
                alert('Unauthorized User.', err)
            })
    }


    // when login btn is clicked, the input needs to render when the modal is open, and close prior to the modal closing. 
    render() {
        const { username, password } = this.props;
        
        setTimeout(() => {
            if (!this.props.displayForm && this.props.openModal) {
                this.props.toggleFormDisplay(true);
            }
        }, 700);
        return (
            <div className={ this.props.openModal ? "login-form" : "login-form-closed" }>
                {
                    this.props.displayForm && (
                        <>
                            <img src={ logo } alt="tortuga"/>
                            <form onSubmit={this.login} className={ this.props.openModal ? "form-container" : "form-container-closed" }>
                                    <input 
                                            type="text"
                                            onChange={this.handleUsername} 
                                            placeholder=" username"
                                            value={username}
                                    />
                                    <input 
                                            type="password"
                                            onChange={this.handlePassword} 
                                            placeholder=" password"

                                            value={password}
                                    />
                                    <button className="form-button">login</button> 
                            </form>
                        </>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { username, password, openModal, currentUsername, displayForm } = state;
    return {
        username, 
        password,
        openModal,
        currentUsername,
        displayForm
    }
}

export default connect(mapStateToProps, {updateUsername, updatePassword, updateCurrentUsername, toggleFormDisplay, toggleModal })(Login);