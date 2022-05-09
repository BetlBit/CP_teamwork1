import React from 'react';
import { Collaborations } from './Collaborations';
import { HiPage } from './HiPage';
import { Navbar } from './Navbar';
import { Product } from './Product';
import { Footer } from './Footer';
import {useState} from 'react'
import { themes, ThemeContext } from "./ThemeContext";


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
      <button onClick={()=> handler()}>Клац</button>
      <ThemeContext.Provider value = {theme}>
      <Navbar />
      <HiPage />
      <ThemeContext.Provider value = {theme2}>
      <Collaborations />
      </ThemeContext.Provider>
      <ThemeContext.Provider value = {theme3}>
      <Product />
      </ThemeContext.Provider>
      <ThemeContext.Provider value = {theme2}>
      <Footer />
      </ThemeContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

