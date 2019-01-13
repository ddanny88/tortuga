import React, { Component } from 'react';
import './login.css';
import axios from 'axios';
import { updateUsername, updatePassword} from '../../ducks/reducer';
import { connect } from 'react-redux';



class Login extends Component {
    

    handleUsername = (e) => {
        this.props.updateUsername(e.target.value)
    }
    handlePassword = (e) => { 
        this.props.updatePassword(e.target.value)
    }

    
    login = () => {
       const { username, password } = this.props;
        axios.post('/api/auth/login', {username, password})
            .then(user => {
                console.log(user)
            }) 
            .catch(err => {
                alert('Unauthorized User.', err)
            })
    }



    
    render() {
        const {username, password } = this.props;
        return (
            <div className="login-form">
                <span id="close">&times;</span>
                <p>logo here</p>
               <input 
                    onChange={this.handleUsername} 
                    placeholder=" username"
                    className="login-input" 
                    value={username}
               />
               <input 
                    onChange={this.handlePassword} 
                    placeholder=" password"
                    className="login-input" 
                    value={password}
               />
               <button  onClick={this.login} className="form-button">login</button> 
            </div> 
        );
    }
}

const mapStateToProps = (state) => {
    const { username, password } = state;
    return {
        username, 
        password
    }
}

export default connect(mapStateToProps, {updateUsername, updatePassword})(Login);
