import React from 'react';
import { Collaborations } from './Collaborations';
import { HiPage } from './HiPage';
import { Navbar } from './Navbar';
import { Product } from './Product';
import { Footer } from './Footer';
import { About } from './About';
import { NotFoundPage } from './NotFoundPage';
import {useState} from 'react'
import { themes, ThemeContext } from "./ThemeContext";
import { Route, Routes} from "react-router-dom"

function App() {
  const [theme, setTheme] = useState(themes.light)
  const [theme2, setTheme2] = useState(themes.light2)
  const [theme3, setTheme3] = useState(themes.light3)
  const handler = () => {
    setTheme((prevTheme)=> prevTheme === themes.light? themes.dark: themes.light)
    setTheme2((prevTheme)=> prevTheme === themes.light2? themes.dark2: themes.light2)
    setTheme3((prevTheme)=> prevTheme === themes.light3? themes.dark3: themes.light3)
  }
    return (
    <div>
      <ThemeContext.Provider value = {theme}>
      <Navbar />
			<div className='themechange'>
				<button className='buttontheme' onClick={()=> handler()}>Смени!</button>
			</div>
      {/* <HiPage />
			Ты не то закоммитил, Паш */}
      <Routes>
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/" element={<HiPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ThemeContext.Provider value = {theme2}>
      </ThemeContext.Provider>
      <ThemeContext.Provider value = {theme3}>
      </ThemeContext.Provider>
      <ThemeContext.Provider value = {theme2}>
      <Footer />
      </ThemeContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;



