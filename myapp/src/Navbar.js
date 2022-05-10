import React from 'react';
import shield from './images/shield.png'
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Link } from "react-router-dom"



export const Navbar = () => {
	const theme = useContext(ThemeContext)
    return (
        <header className="header" style={{background: theme.background, color: theme.color, outline: theme.outline}}>
        <nav className="nav">
            <img src={shield} className="logo"></img>
            <h1 className="header-title">Axie</h1>
            <Link to="/collaborations" className="links">Collaborations</Link>
            <Link to="/product" className="links">Product</Link>
            <Link to="/about" className="links">About</Link>
        </nav>
        <button className="sign-in">Log In</button>
      </header>
    )
}