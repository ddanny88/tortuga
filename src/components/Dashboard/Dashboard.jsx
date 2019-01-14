import React, { Component } from 'react';
import Product from '../Product/Products';
// import {getProducts} from '../../ducks/reducer';
import { connect } from 'react-redux';
import'./dash.css';
import axios from 'axios';
import { updateUsername, updatePassword, toggleModal } from '../../ducks/reducer';





class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginContent: false
        }
    }


    // componentDidMount(){

    // }


    //  when the close icon is clicked, this.props.openModal is set back to false, however, when it is clicked again the modal content is rendering before the modal is fully displayed. 
    componentDidUpdate(prevProps, prevState){
        if(this.props.openModal){
            setTimeout(()=> {
                this.setState({
                    loginContent: true
                })
            }, 1000)
        }
    }
    handleUsername = (e) => {
        this.props.updateUsername(e.target.value)
    }
    handlePassword = (e) => { 
        this.props.updatePassword(e.target.value)
    }

    handleModal = () => {
        console.log('hit')
        this.props.toggleModal(!this.props.openModal)
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
        const { username, password } = this.props;
        // console.log('open_modal nigga:', this.props.openModal)
        return (
            <div>
                <div className="hero-img">
                {
                    this.props.openModal? (
                    <div className="login-form">
                        <div className={this.state.loginContent ? "login-content" : "hide-content"}>
                                    
                            <span onClick={this.handleModal} id="close">&times;</span>
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
                    </div> 
                    ) : <div className="hidden-modal"/>
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
    const {openModal, username, password} = state;
    return {
        openModal,
        username, 
        password

    }
}
export default connect(mapStateToProps,{updateUsername, updatePassword, toggleModal })(Dashboard);