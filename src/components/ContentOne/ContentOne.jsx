import React from 'react';
import  './CompOne.css';


const ContentOne = (props) => {
    return (
        <div className="contentOne-container">
            <div>
                <img 
                    src="https://s3.us-east-2.amazonaws.com/drank-content/contentOne.png" 
                    alt="drinks on a table"
                    className="content-img1"
                />
            </div>

            <div className="text-containerOne">
                <p className="quote1">"Drinking rum before 10am makes you a pirate, not an alcoholic."</p>
            </div>
        </div>
    )
}

export default ContentOne;