import React from "react";
import ico1 from "./images/facebook.png";
import ico2 from "./images/twitter.png";
import ico3 from "./images/telegram.png";
import ico4 from "./images/youtube.png";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


export const Footer = () => {
	const theme = useContext(ThemeContext)
	
	return (
		<div className="footer1" style={{background: theme.background, color: theme.color, outline: theme.outline}}>
			<footer className='footer'>
				<div>
					<h1 className="header-title"><span className="span-UP">Axie</span></h1>
					<p id='address'>г. Лаишево, г. Лаишево, ул. Советская, дом 4 <br />8 (960) 074-94-74<br />support@gmail.com</p>
				</div>

				<div>
					<p className='headingC'><b>Links</b></p>
					<ul >
						<li><a className="lnks" href="/home">Home</a></li>
						<li><a className="lnks" href="/about">About</a></li>
						<li><a className="lnks" href="">Contact us</a></li>
					</ul>
				</div>

				<div>
					<p className='headingC'><b>Info</b></p>
					<ul>
						<li><a className="lnks" href="">Partners</a></li>
						<li><a className="lnks" href="">Licenses</a></li>
						<li><a className="lnks" href="">Legal information</a></li>
					</ul>
				</div>

				<div className="lnks">
					<p id='c4' className='headingC'><b>Follow us</b></p>
					<img className='followUS' src={ico1} alt='Facebook' />
					<img className='followUS' src={ico2} alt='Twitter' />
					<img className='followUS' src={ico3} alt='Telegram' />
					<img className='followUS' src={ico4} alt='YouTube' />
				</div>
			</footer>
		</div>
	)
}