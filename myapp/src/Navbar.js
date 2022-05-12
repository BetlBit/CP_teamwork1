import React from 'react';
import shield from './images/shield.png'
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


export const Navbar = () => {
	const theme = useContext(ThemeContext)
    return (
        <header className="header" style={{background: theme.background, color: theme.color, outline: theme.outline}}>
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