import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {updateAddress, updateCity, updatePhone, updateState, updateZip, uploadDL} from '../../ducks/reducer';
import './final.css';




class FinalCheckout extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: '',
            editInfo: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
           this.getSession();
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

    getSession = () => {
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
    handleEdit = () => {
        this.setState({
            editInfo: !this.state.editInfo
        });
    }
    handleCancel = () => {
        this.handleEdit();
    }
    handledSubmit = () => {
        this.handleEdit();
    }
    handleAddress = (e) =>{
        this.props.updateAddress(e.target.value);
    }
    handleCity = (e) =>{
        this.props.updateCity(e.target.value);
    }
    handleState = (e) =>{
        this.props.updateState(e.target.value);
    }
    handleZip = (e) =>{
        this.props.updateZip(e.target.value);
    }
    handlePhone = (e) =>{
        this.props.updatePhone(e.target.value);
    }

    updateCheckoutInfo = (id) => {
        const { address, city, st, phone, zipcode } = this.props;
        axios.put(`/api/updatecheckout/${id}`, { address, city, st, phone, zipcode })
            .then( response => {
                console.log('updated info', response)
                this.handledSubmit();
                this.getSession();
            })
            .catch ( err => {
                console.log(err)
            });
    }

    handleFile = (e) => {
        this.props.uploadDL(e.target.value);
        console.log(e.target.value);
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
               {
                   !this.state.editInfo ?  
                  <div>
                    {user && <p>Delivery Address: {user.address}</p>}
                    {user && <p>City: {user.city}</p>}
                    {user && <p>State: {user.state}</p>}
                    {user && <p>Zipcode: {user.zipcode}</p>}
                    {user && <p>Phone: {user.phone}</p>}
                    <button onClick={this.handleEdit} className="edit-btn">edit info</button>
                  </div> 
                  : 
                  <div className="edit-info-form">
                      <input onChange={this.handleAddress} placeholder=" address" />
                      <input onChange={this.handleCity} placeholder=" city" />
                      <input onChange={this.handleState} placeholder=" state" />
                      <input onChange={this.handleZip} placeholder=" zipcode" />
                      <input onChange={this.handlePhone} placeholder=" phone" />
                      <div><button className="submit-btn" onClick={() => this.updateCheckoutInfo(user.checkoutId)}>submit</button>
                      <button onClick={this.handleCancel} className="cancel-btn">cancel</button></div>
                  </div>              
                }
               <br/>
               <h3>DL UPLOAD:  </h3>
                    <img 
                        src={this.props.DLFile ? this.props.DLFile : "https://s3.us-east-2.amazonaws.com/users-id/placeholder_dl.png"} 
                        alt="license"
                        className="dl-pic"
                    />
                    <form>
                        <input 
                            type="file" 
                            name="file" 
                            id="file" 
                            class="inputfile" 
                            onChange={this.handleFile}
                        />
                        <label for="file"><i className="fas fa-camera"></i></label>
                    </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {phone, address, city, st, zipcode, DLFile} = state;
    return {
        phone,
        address,
        city,
        st,
        zipcode,
        DLFile
    }
}
export default connect(mapStateToProps, {updateAddress, updateCity, updatePhone, updateState, updateZip, uploadDL})(FinalCheckout);

