import React from 'react';
import  './CompOne.css';


const ContentOne = (props) => {
    return (
        <div className="contentOne-container">
            <div>
                <img 
                    src="https://s3.us-east-2.amazonaws.com/tortuga-assets/compONE.png" 
                    alt="drinks on a table"
                    className="content-img1"
                />
            </div>

            <div className="text-containerOne">
               
                <img src="https://s3.us-east-2.amazonaws.com/tortuga-assets/money_shot.jpg" alt="money"
                className="money-shot"
                />
            </div>
        </div>
    )
}

export default ContentOne;