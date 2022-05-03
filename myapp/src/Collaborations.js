import React from "react";
import "./style.css";
import google from './images/search.png'
import microsoft from './images/microsoft.png'
import flaticon from './images/flaticon.png'
import adidas from './images/adidas.png'
import nike from './images/nike.png'

export const Collaborations = () => {
    return (
        <div className="Сollabs">
           <div className="companyes">
                <img src={google} className="img-colab"></img>
                <img src={microsoft} className="img-colab"></img>
                <img src={flaticon} className="img-colab"></img>
                <img src={adidas} className="img-colab"></img>
                <img src={nike} className="img-colab"></img>
           </div>
        </div>
    )
}