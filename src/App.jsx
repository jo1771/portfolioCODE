import { useState } from 'react'
import React from 'react'
import windowIcon from "./assets/images/window.svg";
import aboutMeIcon from "./assets/images/aboutMe.svg"
import skils from "./assets/images/skils.svg"
import myWorks from "./assets/images/myWorks.svg"
import contact from "./assets/images/contact.svg"
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Works from './components/Works';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Works/>
      <Contact/>
    </>
  )
}

export default App