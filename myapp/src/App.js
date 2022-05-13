import React from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
// import { Collaborations } from './Collaborations';
import { HiPage } from './HiPage';
import { NotFound } from './pages/NotFound';
import { Product } from './pages/Product';
import { Footer } from './Footer';
import { useState } from 'react'
import { themes, ThemeContext } from "./ThemeContext";
import shield from './images/shield.png'
import { useContext } from "react";

function App() {
	const [theme, setTheme] = useState(themes.light)
	const [theme2, setTheme2] = useState(themes.light2)
	const [theme3, setTheme3] = useState(themes.light3)
	const handler = () => {
		setTheme((prevTheme) => prevTheme === themes.light ? themes.dark : themes.light)
		setTheme2((prevTheme) => prevTheme === themes.light2 ? themes.dark2 : themes.light2)
		setTheme3((prevTheme) => prevTheme === themes.light3 ? themes.dark3 : themes.light3)
	}

	const theme5 = useContext(ThemeContext)
	return (
		<div className='ffff' style={{ background: theme.background, color: theme.color, outline: theme.outline }}>

			<ThemeContext.Provider value={theme}>

				<header className="header" style={{ background: theme.background, color: theme.color, outline: theme.outline }}>
					<nav className="nav">
						<img src={shield} className="logo"></img>
						<h1 className="header-title">Axie</h1>
						<a href="/home" className="links">Home</a>
						<a href="/product" className="links">Product</a>
					</nav>
					<button className='sign-in' onClick={() => handler()}>Change Theme</button>
					<button className="sign-in">Log In</button>
				</header>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HiPage />} />
						<Route path="/home" element={<HiPage />} />
						<Route path="/product" element={<Product />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
				<ThemeContext.Provider value={theme2}>
					{/* <Collaborations /> */}
				</ThemeContext.Provider>
				<ThemeContext.Provider value={theme3}>
					{/* <Product /> */}
				</ThemeContext.Provider>
				<ThemeContext.Provider value={theme3}>
					<Footer />
				</ThemeContext.Provider>
			</ThemeContext.Provider>
		</div>
	);

}

export default App;