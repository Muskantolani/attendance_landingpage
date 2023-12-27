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
    <div className='bg-white w-full overflow-hidden'>
          <Navbar/>
    </div>

    <div className='bg-normal w-full overflow-hidden'>
          <Hero/>
    </div>

    <div className='bg-primary w-full overflow-hidden'>
          <Features/>
    </div>

    <div className='bg-secondary w-full overflow-hidden'>
          <AboutUs/>
    </div>

    <div className='bg-normal w-full overflow-hidden'>
          <Contact/>
    </div>

    <div className='bg-callaction w-full overflow-hidden'>
          <Footer/>
    </div>

    </>
  )
}

export default App