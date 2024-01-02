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
                  <div className='bg-white'>
                        <Navbar />
                  </div>
                  <Hero />

                  <div className='bg-primary'>
                        <Features />
                  </div>

                  <div className='bg-secondary'>
                        <AboutUs />
                  </div>

                  <div className='bg-normal'>
                        <Contact />
                  </div>

                  <div className='bg-callaction'>
                        <Footer />
                  </div>

            </>
      )
}

export default App