import React, { Component } from 'react';
import MiddleContent from '../MiddleContent/MiddleContent';
import ContentOne from '../ContentOne/ContentOne';
import ContentTwo from '../ContentTwo/ContentTwo';
import'./dash.css';
import Slider from '../Slider/Slider';







class Dashboard extends Component {

    render() {
        return (
            <div>
                <div className="hero-img">
                <Slider/>
                </div>
              

               <div className="middle-mission-content">
                    <h2 className="mission">BRINGING THE PARTY TO YOU SINCE 2019</h2>
                    <hr className="mission-rule"/>
                    <p className="statement">At Tortuga, we take pride in providing you with all of your beverage needs.</p>
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



