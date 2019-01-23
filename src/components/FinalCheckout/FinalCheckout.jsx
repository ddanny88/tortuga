import React, { Component } from 'react';
import axios from 'axios';
import './final.css';




class FinalCheckout extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: ''
        }
    }
    
    componentDidMount(){
        axios.get('/api/getfullsession')
            .then(response => {
                this.setState({
                    userInfo: response.data.user
                })
                console.log('from inside .then',this.state)
            })
            .catch( err => {
                console.log("***" + err)
            })
    }



    render() {
        let user;
        console.log(this.state.userInfo)
        if(this.state.userInfo){
            console.log('yay',this.state)
            user = this.state.userInfo;
            
        } else{
            console.log('nah')
        }
        
        return (
            <div className="final-container">
            <br/> 
            <h2>Customer Info Review</h2>
            <br/>
                {user && <p>Order #{user.orderNumber}</p>}
                {user && <p>username: {user.username}</p>}
                {user && <p>First Name: {user.firstName}</p>}
                {user && <p>Last Name: {user.lastName}</p>}
                <br/>
            <h3>Is the following info correct?</h3>
            <br/>
                {user && <p>Delivery Address: {user.address}</p>}
                {user && <p>City: {user.city}</p>}
                {user && <p>State: {user.state}</p>}
                {user && <p>Zipcode: {user.zipcode}</p>}
                {user && <p>Phone: {user.phone}</p>}

            </div>
        );
    }
}

export default FinalCheckout;