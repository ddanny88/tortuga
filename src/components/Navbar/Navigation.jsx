import React from 'react';
import'./nav.css';
import {Link} from 'react-router-dom';
// import Modal from 'react-responsive-modal';




const Navigation = (props) => {
    return (
        <div className="nav-bar-container">
           <div>
               <p>logo</p>
           </div>
           <Link to='/register'><p>sign up</p></Link>
           <Link to="/login"><button className="login-button">login</button></Link>
           
        </div>
    )
}

export default Navigation;