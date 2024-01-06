import React from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Features from './components/Features'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'

const App = () => {
      return (
            <>
                  <Navbar />
                  <Hero />
                  <Features />
                  <AboutUs />
                  <Contact />
                  <Footer />

            </>
      )
}

export default App