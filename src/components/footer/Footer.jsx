import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <div>
                    <footer className="footer-container">
                        <div>
                            <p className="footer-txt" >Contact</p>
                            <p className="footer-txt" >(800)123-4567</p>
                            <p className="footer-txt" >help@tortuga.fun</p>
                        </div>
                        <div className="social-content">
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-twitter-square"></i>
                                <i className="fab fa-google-plus-square"></i>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default Footer;