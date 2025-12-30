import React from 'react'
import Hero from './Components/Hero'
import './App.css'
import About from './Components/About'
import IntroHero from './Components/IntroHero'
import Skills from './Components/Skills'
import Header from './Components/Header'
import Experience from './Components/Experience'
import ContactCTA from './Components/ContactCTA'
import Footer from './Components/Footer'
import FeaturedProject from './Components/FeaturedProject'


const App = () => {
  return (
    <>
    <IntroHero />
    <Header />
    <Hero />
    <About />
    <Skills />
    <FeaturedProject />
    <Experience />
    <ContactCTA />
    <Footer />
    </>
  )
}

export default App