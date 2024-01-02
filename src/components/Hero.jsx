import { homepic } from "./Images"
import React from 'react'


const Hero = () => {
  return (
    <>
      <section className='flex flex-row justify-between px-24 mb-10'>
        <div className='flex justify-center items-start flex-col mt-5 px-6 text-4xl'>
          <div>
            <h1 className="font-bold text-black">
              Empower Learning,
              <span className="text-gradient text-management" >Simplify Management.</span>
            </h1>
          </div>
          <p className='font-medium text-lg leading-7 mt-5 w-5/6'>
            Transform education effortlessly with our all-in-one platform, merging lectures, assignments, and attendance for a seamless, innovative learning experience – where simplicity meets excellence.
          </p>
          <button className='text-lg font-semibold rounded-xl mt-20 text-white bg-callaction w-80 py-4 hover:w-[330px] focus:bg-active duration-200 ease-in'>Learn More</button>
        </div>
        <img src={homepic} alt="homepic" />
      </section>
    </>
  )
}

export default Hero





