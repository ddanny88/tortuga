import React, { Component } from 'react';
import MiddleContent from '../MiddleContent/MiddleContent';
import ContentOne from '../ContentOne/ContentOne';
import ContentTwo from '../ContentTwo/ContentTwo';
import'./dash.css';







class Dashboard extends Component {

    render() {
        return (
            <div>
                <div className="hero-img">
                
                    <h1 className="main-heading">Main welcome message goes here!</h1>
                    <button className="hero-btn">More Info</button>
                </div>
              

               <div className="middle-mission-content">
                    <h2 className="mission">BRINGING THE PARTY TO YOU SINCE 2019</h2>
                    <hr className="mission-rule"/>
                    <p className="statement">At Tortuga, This is a mission statement that will make you buy alcohol which means more money for me.</p>
               </div>

                    <ContentOne />
                    <ContentTwo />

                <div className="featured">
                    <h2 className="featured-text">FEATURED</h2>
                    <hr className="featured-rule"/>
                </div>
                    <MiddleContent />
            </div>
        );
    }
}


export default Dashboard;



