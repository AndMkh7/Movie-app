import React from "react";
import  "./Footer.module.css";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>About us</h5>
                        <ul>
                            <li><a href="#">About company</a></li>
                            <li><a href="#">For Advertising</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Follow Us</h5>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Contact Us</h5>
                        <ul>
                            <li><a href="#">Email</a></li>
                            <li><a href="#">Phone</a></li>
                            <li><a href="#">Address</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>&copy; 2023 AndMkh. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;