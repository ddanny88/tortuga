import React from 'react';
import  './CompTwo.css';


const ContentTwo = (props) => {
    return (
        <div className="contentTwo-container">

            <div className="text-containerTwo">
                text goes here
            </div>
            <div>
                <img 
                    src="https://s3.us-east-2.amazonaws.com/drank-content/ContTwo.png" 
                    alt="drinks on a table"
                    className="content-img2"
                />
            </div>
        </div>
    )
}

export default ContentTwo;