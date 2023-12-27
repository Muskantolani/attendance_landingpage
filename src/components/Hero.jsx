import homepic from '../assests/homepic.png'
import React from 'react'


const Hero = () => {
  return (
        <section id="home" className={`flex md:flex-row flex-col sm:py-16 py-6`}>
          <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}>
            
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[30px] text-black ss:leading-[90px] leading-[60px]">
                Empower Learning, <br className="sm:block hidden" />{" "}
                <span className="text-gradient text-primary text-6xl" >Simplify Management.</span>{" "}
              </h1>
            </div>
            <p className={`font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[450px] mt-5`}>
            Transform education effortlessly with our all-in-one platform, merging lectures, assignments, and attendance for a seamless, innovative learning experience – where simplicity meets excellence.
            </p>
          </div>
    
          <div className={`flex-1 flex flex justify-center items-center md:my-0 my-10 relative`}>
            <img src={homepic} alt="homepic" className="w-[100%] h-[100%] relative z-[5]" />
          </div>
    
        </section>
  )
}

export default Hero





