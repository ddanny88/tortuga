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
                        <img src="https://s3.us-east-2.amazonaws.com/tortuga-slider/sliderOne.png" alt="slide-one"/>
                    </div>

                    <div id="two" className="slide">
                        <img src="https://s3.us-east-2.amazonaws.com/tortuga-slider/sliderTwo.png" alt="slide-two"/>
                    </div>
                    
                    <div id="three" className="slide">
                        <img src="https://s3.us-east-2.amazonaws.com/tortuga-slider/contentOne.png" alt="slide-three"/>
                    </div>

                    <div id="four" className="slide">
                        <img src="https://s3.us-east-2.amazonaws.com/tortuga-slider/white_liquor2.png" alt="slide-three"/>
                    </div>

                    <div id="four" className="slide">
                        <img src="https://s3.us-east-2.amazonaws.com/tortuga-slider/heroIMG.jpeg" alt="slide-three"/>
                    </div>
               </figure>
            </div>
        );
    }
}

export default Slider;