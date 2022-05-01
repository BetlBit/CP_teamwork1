import React from "react";
import "./style.css";


export const Footer = () => {
    return (
        <div className="footer">
            <div className="block-one">
                <div className="logo-footer">Axie</div>
                <p className="info">IC New Town Street, Newstate U94</p>
                <p className="info">(+88)017857414</p>
                <p className="info">supporterAxie@gmail.com</p>
            </div>
            <div className="block-two">
                <div className="other-info">
                    <h2 className="other-pages">Other Pages</h2>
                    <p className="pages">About Us</p>
                    <p className="pages">Privacy</p>
                    <p className="pages">Contact Us</p>
                </div>
                <div className="privacy-teams">
                    <h2 className="privacy-info">Privacy & Teams</h2>
                    <p className="pages">Software principles</p>
                    <p className="pages">Application securiy</p>
                    <p className="pages">White paper</p>
                </div>
            </div>
            <div className="block-three">
                <h2 className="follow">Follow Us</h2>
                <div className="messangers"></div>
                <div className="messangers"></div>
                <div className="messangers"></div>
                <div className="messangers"></div>
            </div>
        </div>
    )
}