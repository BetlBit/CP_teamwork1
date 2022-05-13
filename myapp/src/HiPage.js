import React from "react";
import "./style.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


export const HiPage = () => {
	const theme = useContext(ThemeContext)

	return (
		<div className="Hi" style={{ background: theme.background, color: theme.color, outline: theme.outline }}>
			<div className="contanier">
				<h2 className="welcome">WELCOME TO AXIE PRODUCT</h2>
				<h1 className="brand-name">AxiE<br />Security<span className="dot">.</span></h1>
				<p className="preview">Our technology to protect the user from unforeseen threats is designed for all inhabitants of the earth, download, rejoice, and do not be afraid for your data</p>
				<form form action="/product">
					<button type="submit" className="try-demo">Try Demo</button>
				</form>
			</div>
		</div>
	)
}