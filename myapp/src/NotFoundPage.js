import React from "react";
import "./style.css";

export const NotFoundPage = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1 className="textNOT">404</h1>
                    <h2 className="txtNTF">Page not found</h2>
                </div>
                <a className="NTF-page" href="#">Report</a>
                <a className="NTF-page" href="#">Homepage</a>
            </div>
        </div>
    )
}

