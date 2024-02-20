import React from 'react'

import LandingPage from '../Landing/LandingPage'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import DarkModeBtn from '../Header/DarkModeBtn'

const Main = () => {
  return (
    <main>
        <section id='home' className=' h-auto lg:h-screen'>
          <Header/>
          <Sidebar/>
          <LandingPage />
        </section>
        <section id='about'>about</section>
        <section id='skills'>skills</section>
        <section id='projects'>projects</section>
        <section id='contact'>contact</section>
        
    </main>
  )
}

export default Main