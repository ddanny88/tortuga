import React, { Component } from 'react';
import MiddleContent from '../MiddleContent/MiddleContent';
import'./dash.css';







class Dashboard extends Component {

    // componentDidUpdate(prevProps, prevState){
    //     if(this.props.openModal){
    //         setTimeout(()=> {
    //             this.setState({
    //                 loginContent: true
    //             })
    //         }, 1000)
    //     }
    // }

    render() {
        return (
            <div>
                <div className="hero-img">
                
                    <h1 className="main-heading">Main welcome message goes here!</h1>
                    <button className="hero-btn">More Info</button>
                </div>
              
                <MiddleContent />
            </div>
        );
    }
}


export default Dashboard;



{/* {
                    this.props.openModal? (
                    <div className="login-form">
                        <div className={this.state.loginContent ? "login-content" : "hide-content"}>
                                    
                            <span onClick={this.handleModal} id="close">&times;</span>
                            <img src={formLogo} alt="tortuga" className="form-logo"/>
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
                } */}