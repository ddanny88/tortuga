// state, city, address, zip can all be requrired when the user is checking out, also checking if the users billing and shipping address are the same.  

import React, { Component } from 'react';
import { updateFirstName, updateLastName, updatePassword, updateUsername,  updateEmail, toggleModal, updateCurrentUsername } from '../../ducks/reducer';
import { connect } from 'react-redux';
import './register.css';
import axios from 'axios';


class Registration extends Component {

    handleFirstname = (e) => {
        this.props.updateFirstName(e.target.value);
    }
    handleLastname = (e) => {
        this.props.updateLastName(e.target.value);
    }
    handleUsername = (e) => {
        this.props.updateUsername(e.target.value);
    }
    handlePassword = (e) => {
        this.props.updatePassword(e.target.value);
    }
    handleEmail = (e) => {
        this.props.updateEmail(e.target.value);
    }

    register = (e) => {
        const { firstName, lastName, username, password, email } = this.props;
       e.preventDefault();
        axios.post('/api/auth/register', {firstName, lastName, username, password, email})
        .then(() => {
            axios.get('/api/getusername')
            .then( user => {
                this.props.updateCurrentUsername(user.data.username)
                console.log(user)
            })
            .catch( err => {
                console.log(err)
            }) 
            this.props.toggleModal(false);
        })
    }

    render() {
        const { firstName, lastName, username, password, email } = this.props;
        return (
            <div>
                <form  onSubmit={this.register} className="register-form">
                    <input 
                        placeholder=" first name"
                        className="register-input"
                        onChange={this.handleFirstname}
                        value={firstName}

                    />
                    <input 
                        placeholder=' last name'
                        className="register-input"
                        onChange={this.handleLastname}
                        value={lastName}
                    />
                    <input 
                        placeholder=" username"
                        className="register-input"
                        onChange={this.handleUsername}
                        value={username}
                    />
                    <input 
                        type="password"
                        placeholder=" password"
                        className="register-input"
                        onChange={this.handlePassword}
                        value={password}
                    />
                    <input 
                        placeholder=" you@email.com"
                        className="register-input"
                        onChange={this.handleEmail}
                        value={email}
                    />
                    <button className="register-btn">register</button>
                </form>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const { firstName, lastName, email, password, username } = state; 
    return {
        firstName, 
        lastName,
        email,
        password,
        username
    }
}

export default connect(mapStateToProps, { updateFirstName, updateLastName, updatePassword, updateUsername,  updateEmail, toggleModal, updateCurrentUsername })(Registration);