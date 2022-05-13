import React from "react";
import { Footer } from './Footer';
import google from './images/search.png'
import microsoft from './images/microsoft.png'
import flaticon from './images/flaticon.png'
import adidas from './images/adidas.png'
import nike from './images/nike.png'
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export const Collaborations = () => {
    const theme = useContext(ThemeContext)
    return (
        <div className="Сollabs" style={{background: theme.background, color: theme.color, outline: theme.outline}}>
           <div className="companyes">
                <img src={google} className="img-colab"></img>
                <img src={microsoft} className="img-colab"></img>
                <img src={flaticon} className="img-colab"></img>
                <img src={adidas} className="img-colab"></img>
                <img src={nike} className="img-colab"></img>
           </div>
					 <Footer/>
        </div>
    )
}