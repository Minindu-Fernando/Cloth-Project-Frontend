import React from 'react'
import './footercomponent.css';

export default function FooterComponent() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* Company Column */}
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">affiliate program</a></li>
                        </ul>
                    </div>

                    {/* Get Help Column */}
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">order status</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>

                    {/* Contact Us Column */}
                    <div className="footer-col">
                        <h4>contact us</h4>
                        <ul>
                            <li><a href="tel:011-4323123">011-4323123</a></li>
                            <li><a href="tel:011-5645342">011-5645342</a></li>
                        </ul>
                    </div>

                    {/* Follow Us Column */}
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
