import React from "react";
import "./style.css";
import shield from './images/shield.png'


export const Navbar = () => {
    return (
        <header className="header">
        <nav className="nav">
            <img src={shield} className="logo"></img>
            <h1 className="header-title">Axie</h1>
            <a href="/home" className="links">Home</a>
            <a href="/product" className="links">Product</a>
            <a href="/about" className="links">About</a>
        </nav>
        <button className="sign-in">Log In</button>
      </header>
    )
}