import React from 'react'
import Hero from './Components/Hero'
import './App.css'
import About from './Components/About'
import IntroHero from './Components/IntroHero'
import Skills from './Components/Skills'
import Projects from './Components/Project'
import Process from './Components/Process'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import ContactCTA from './Components/ContactCTA'
import Footer from './Components/Footer'



const App = () => {
  return (
    <>
    <IntroHero />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Process />
    <Services />
    <Testimonials />
    <ContactCTA />
    <Footer />
    
    
    </>
  )
}

export default App