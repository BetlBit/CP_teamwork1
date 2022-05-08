import React from 'react';
import "./style.css";
import shield from './images/shield.png'
import { useEffect, useState } from "react";


export const Navbar = () => {
    const [che, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);
    useEffect(() => {
      document.getElementsByTagName("Body")[0].setAttribute("data-theme", localStorage.getItem("theme"))
      document.getElementsByClassName("Hi")[0].setAttribute("data-theme", localStorage.getItem("theme"));
      document.getElementsByClassName("header")[0].setAttribute("data-theme", localStorage.getItem("theme"));
      document.getElementsByClassName("select-plan")[0].setAttribute("data-theme", localStorage.getItem("theme"));
      document.getElementsByClassName("lnks")[0].setAttribute("data-theme", localStorage.getItem("theme"));
      document.getElementsByClassName("block-buy")[0].setAttribute("data-theme", localStorage.getItem("theme"));
        
      
    }, [che]);
  
    

    function ThemeChange() {
      if (che === false) {
        localStorage.setItem("theme", "dark");
        
        setChecked(true);
      } else {
        localStorage.setItem("theme", "light");
  
        setChecked(false);
      }
    }
    return (
        <header className="header">
        <nav className="nav">
            <img src={shield} className="logo"></img>
            <h1 className="header-title">Axie</h1>
            <a href="/home" className="links">Home</a>
            <a href="/product" className="links">Product</a>
            <a href="/about" className="links">About</a>

        </nav>
        <label>Change Theme
          <input
            type="checkbox"
            defaultChecked={che}
            onChange={() => ThemeChange()}
          />
        </label>
        <button className="sign-in">Log In</button>
      </header>
    )
}