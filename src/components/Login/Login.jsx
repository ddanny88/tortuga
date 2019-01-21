import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUsername, updatePassword, updateCurrentUsername} from '../../ducks/reducer';
import axios from 'axios';
import './login.css';

 import logo from '../../assets/icons/blackout-logo.png';



class Login extends Component {
   

    handleDisplay = () => {
        this.setState({
            displayLoginContent: !this.state.displayLoginContent
        })
    }

    handleUsername = (e) => {
        this.props.updateUsername(e.target.value)
    }
    handlePassword = (e) => { 
        this.props.updatePassword(e.target.value)
    }


    updateCurrentUser = (username) => {
        this.props.updateCurrentUsername(username)
    }
    login = () => {
       const { username, password } = this.props;
        axios.post('/api/auth/login', { username, password })
            .then( user => {
                console.log(user)
                this.updateCurrentUser(user.data.username)
            }) 
            .catch(err => {
                alert('Unauthorized User.', err)
            })
    }


    // when login btn is clicked, the input needs to render when the modal is open, and close prior to the modal closing. 
    render() {
        const { username, password } = this.props;
        // if (!this.props.displayLoginContent) {
        //     return null;
        // }

        return (
            <div className={ this.props.displayLoginContent ? "login-form" : "login-form-closed" }>
                <img src={ logo } alt="tortuga"/>
                   <div className={ this.props.displayLoginContent ? "form-container" : "form-container-closed" }>
                        <input 
                                type="text"
                                onChange={this.handleUsername} 
                                placeholder=" username"
                                value={username}
                        />
                        <input 
                                type="text"
                                onChange={this.handlePassword} 
                                placeholder=" password"

                                value={password}
                        />
                        <button  onClick={this.login} >login</button> 
                   </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { username, password, displayLoginContent, currentUsername } = state;
    return {
        username, 
        password,
        displayLoginContent,
        currentUsername
    }
}

export default connect(mapStateToProps, {updateUsername, updatePassword, updateCurrentUsername})(Login);
