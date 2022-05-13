import React from "react";
import { Collaborations } from '../Collaborations';
import { useState } from 'react'
import { useContext } from "react";
import { ThemeContext, themes } from "../ThemeContext";



export const Product = () => {
	const theme = useContext(ThemeContext)
	const [theme2, setTheme2] = useState(themes.light2)
	const handler = () => {
		setTheme2((prevTheme) => prevTheme === themes.light2 ? themes.dark2 : themes.light2)
	}

	return (
		<div className="select-plan" style={{ background: theme.background, color: theme.color, outline: theme.outline }}>
			<ThemeContext.Provider value={theme}>
			<h1 className="Buy-text">Buy Your Plan</h1>
			<div className="select-box" style={{ color: theme.bl }}>

				<div className="block-buy" >
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
			</ThemeContext.Provider>
		</div>
	)
}