import React from "react";
import ico1 from "./images/facebook.png";
import ico2 from "./images/twitter.png";
import ico3 from "./images/telegram.png";
import ico4 from "./images/youtube.png";
import "./style.css";


export const Footer = () => {
	return (
		<div className="footer">
			<footer className='footer'>
				<div>
					<h1 className="header-title"><span className="span-UP">Axie</span></h1>
					<p id='address'>г. Лаишево, г. Лаишево, ул. Советская, дом 4 <br />8 (960) 074-94-74<br />support@gmail.com</p>
				</div>

				<div>
					<p className='headingC'><b>Links</b></p>
					<ul>
						<li><a href="/home">Home</a></li>
						<li><a href="/about">About</a></li>
						<li><a href="">Contact us</a></li>
					</ul>
				</div>

				<div>
					<p className='headingC'><b>Info</b></p>
					<ul>
						<li><a href="">Partners</a></li>
						<li><a href="">Licenses</a></li>
						<li><a href="">Legal information</a></li>
					</ul>
				</div>

				<div>
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