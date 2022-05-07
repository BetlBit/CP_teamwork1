import React from "react";
import "./style.css";
import correct from './images/correct.png'
import remove from './images/remove.png'


export const Product = () => {
    return (
        <div className="select-plan">
            <h1 className="Buy-text">Buy Your Plan</h1>
            <div className="select-box">
                <div className="block-buy">
                    <h2 className="option">Basic Plan</h2>
                    <p className="Price">$15<span>/per month</span></p>
                    <div className="describe">
                        <p className="desc-ON">Full clean PC</p>
                        <p className="desc-ON">Ad blocking</p>
                        <p className="desc-ON">Full optimization</p>
                        <p className="desc-OFF">Full protection</p>
                        <p className="desc-OFF">Сhild protection</p>
                    </div>
                    <button className="buy-plan">Buy Plan</button>
                </div>
                <div className="block-buy">
                    <h2 className="option">Standart Plan</h2>
                    <p className="Price">$30<span className="per">/per month</span></p>
                    <div className="describe">
                        <p className="desc-ON">Full clean PC</p>
                        <p className="desc-ON">Ad blocking</p>
                        <p className="desc-ON">Full optimization</p>
                        <p className="desc-ON">Full protection</p>
                        <p className="desc-OFF">Сhild protection</p>
                    </div>
                    <button className="buy-plan">Buy Plan</button>
                </div>
                <div className="block-buy">
                    <h2 className="option">Premium Plan</h2>
                    <p className="Price">$50<span>/per month</span></p>
                    <div className="describe">
                        <p className="desc-ON">Full clean PC</p>
                        <p className="desc-ON">Ad blocking</p>
                        <p className="desc-ON">Full optimization</p>
                        <p className="desc-ON">Full protection</p>
                        <p className="desc-ON">Сhild protection</p>
                    </div>
                    <button className="buy-plan">Buy Plan</button>
                </div>
            </div>
        </div>
    )
}