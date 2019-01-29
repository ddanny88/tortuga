import React, { Component } from 'react';
import  './slider.css';



/**
 * slider takes 5 images: 
 */
class Slider extends Component {
    render() {
        return (
            <div className="slider">
               <figure>
                    <div id="one" className="slide">
                        <p className="hero-textOne">WELCOME TO TORTUGA</p>
                        <img src="https://s3.us-east-2.amazonaws.com/tortuga-slider/thewinefine.png" alt="slide-one"/>
                    </div>

                    <div id="two" className="slide">
                        <p className="hero-textTwo">LEGENDARY WHISKEYS</p>
                        <img src="https://s3.us-east-2.amazonaws.com/tortuga-slider/finishLiquor.png" alt="slide-two"/>
                    </div>
                    
                    <div id="three" className="slide">
                        <p className="hero-textThree">WELCOME TO TORTUGA</p>
                        <img src="https://s3.us-east-2.amazonaws.com/tortuga-slider/finishGin.png" alt="slide-three"/>
                    </div>

                    <div id="four" className="slide">
                        <p className="hero-textFour">WELCOME TO TORTUGA</p>
                        <img src="https://s3.us-east-2.amazonaws.com/tortuga-slider/finishBlack.png" alt="slide-three"/>
                    </div>

                    <div id="four" className="slide">
                        <p className="hero-textFive">WELCOME TO TORTUGA</p>
                        <img src="https://s3.us-east-2.amazonaws.com/tortuga-slider/finishPool.png" alt="slide-three"/>
                    </div>
               </figure>
            </div>
        );
    }
}

export default Slider;