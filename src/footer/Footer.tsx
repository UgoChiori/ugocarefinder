// HOSPITAL SEARCH PAGE FOOTER COMPONENT

import React from 'react';
import './footer.css';
import {
    FaHome,
    FaPhone,
    FaEnvelope,
} from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div className="footer_container">
            <div className="footer_wrapper">
                <div className="footer_head">
                    <h1 className="footer_heading">CareFinder.</h1>
                    <p className="footer_para">Lorem ipsum dolor</p>
                </div>
                <div className="footer_links">
                    <div className="footer_link">
                        <FaHome className="footer_link_icon" />
                        <p>123, Main Street, Your City</p>
                    </div>
                    <div className="footer_link">
                        <FaPhone className="footer_link_icon" />
                        <p>+123 456 7890</p>
                    </div>
                    <div className="footer_link">
                        <FaEnvelope className="footer_link_icon" />
                        <p>
                            <a href="mailto:user@example.com" target="_blank" rel="noreferrer">Mail Us</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer