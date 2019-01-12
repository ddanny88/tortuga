import React from 'react';
import'./nav.css';
import {Link} from 'react-router-dom';
const Navigation = (props) => {
    return (
        <div className="nav-bar-container">
           <div>
               <p>logo</p>
           </div>
           <p>sign up</p>
           <Link to="/login"><button className="login-button">login</button></Link>
           
        </div>
    )
}

export default Navigation;