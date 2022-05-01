import React from "react";
import "./style.css";


export const HiPage = () => {
    return (
        <div className="Hi">
            <div className="contanier">
                <h2 className="welcome">WELCOME TO AXIE PRODUCT</h2>
                <h1 className="brand-name">AxiE<br/>Security<span className="dot">.</span></h1>
                <p className="preview">Our technology to protect the user from unforeseen threats is designed for all inhabitants of the earth, download, rejoice, and do not be afraid for your data</p>
                <button className="try-demo">Try Demo</button>
            </div>
        </div>
    )
}