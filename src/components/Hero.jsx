import { homepic } from "./Images"
import React from 'react'


const Hero = () => {
  return (
    <>
      <section className='flex flex-col items-center lg:flex-row justify-between px-24 mb-10'>
        <div className='flex justify-center items-center lg:items-start flex-col mt-5 pt-32 lg:pt-0 lg:px-6'>
          <div className="text-center lg:text-start text-3xl sm:text-4xl">
            <h1 className="font-bold text-black">
              Empower Learning,
              <span className="text-gradient text-management" >Simplify Management.</span>
            </h1>
          </div>
          <p className='text-center lg:text-start font-medium text-sm sm:text-base lg:text-lg leading-7 mt-5 w-5/6'>
            Transform education effortlessly with our all-in-one platform, merging lectures, assignments, and attendance for a seamless, innovative learning experience – where simplicity meets excellence.
          </p>
          <button className='text-sm xs:text-base
           sm:text-lg font-semibold rounded-xl mt-10 sm:mt-20 text-white bg-callaction w-36 xs:w-48 sm:w-72 md:w-80 py-4 focus:bg-active duration-200 ease-in'>Learn More</button>
        </div>

        <img className="w-auto" src={homepic} alt="homepic" />

      </section>
    </>
  )
}

export default Hero

