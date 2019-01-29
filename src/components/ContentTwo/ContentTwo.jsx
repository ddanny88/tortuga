import React from 'react';
import  './CompTwo.css';


const ContentTwo = (props) => {
    return (
        <div className="contentTwo-container">

            <div className="text-containerTwo">
               <h3>"Drinking before 10am makes you a pirate, not an alcoholic."</h3>
            </div>
            <div>
                <img 
                    src="https://s3.us-east-2.amazonaws.com/tortuga-assets/beershot.jpg" 
                    alt="drinks on a table"
                    className="content-img2"
                />
            </div>
        </div>
    )
}

export default ContentTwo;