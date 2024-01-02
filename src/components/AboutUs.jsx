import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { about1, about2, about3 } from './Images';

const AboutUs = () => {
  return (
    <>

      <div>
        <div className='flex flex-col justify-center items-center'>
          <h2 className="font-semibold mt-24 text-white mb-2 text-5xl">About Us</h2>
          <hr className='text-white w-36 border-2 rounded-full' />
        </div>
        <p className="text-center text-white mx-36 mt-10 text-xl mb-10">
          Embark on a journey with [Your Platform Name], where we fuse innovation with efficiency in attendance management for educational institutions and workplaces, saving time and boosting productivity.
        </p>
      </div>

      <div className="w-50 h-50 mx-auto">
        <Carousel showArrows={true} showThumbs={false} >
          {/* first slide*/}
          <div className="flex flex-row justify-center items-center space-x-24 py-6">
            <div className="flex flex-col text-white bg-white/20 w-2/5 h-96 p-10 border-2 rounded-2xl">
              <h1 className="font-poppins font-semibold text-5xl mb-10">
                Our Vision
              </h1>
              <p className="font-normal text-left text-[18px] leading-8">
                We aim to lead in attendance management by using cutting-edge AI, including facial recognition, to eliminate manual tracking, save time, and foster efficiency, creating thriving communities in educational institutions and workplaces
              </p>
            </div>
            <div>
              <img src={about1} alt="about1" />
            </div>
          </div>

          {/* second  slide*/}
          <div className="flex flex-row justify-center items-center space-x-24 py-16">
            <div className="flex flex-col text-white bg-white/20 w-2/5 h-96 p-10 border-2 rounded-2xl">
              <h1 className="font-poppins font-semibold text-5xl mb-10">
                Why choose us?
              </h1>
              <p className="font-normal text-left text-[18px] leading-8">
                Opt for [Your Platform Name] for AI-powered efficiency in attendance tracking, a user-friendly interface catering to educators and administrators, real-time reporting for insightful analytics, and a community-focused approach fostering positive impacts on education and workplaces.
              </p>
            </div>
            <div>
              <img src={about2} alt="about2" />
            </div>
          </div>

          {/* third slide*/}
          <div className="flex flex-row justify-center items-center space-x-24 py-16">
            <div className="flex flex-col text-white bg-white/20 w-2/5 h-96 p-10 border-2 rounded-2xl">
              <h1 className="font-poppins font-semibold text-5xl mb-10">
                Our commitment
              </h1>
              <p className="font-normal text-left text-[18px] leading-8">
                [Your Platform Name] is dedicated to continuous improvement, technological advancement, and being your top choice for automated attendance solutions, supporting institutions in their growth and success journey.
              </p>
            </div>
            <div>
              <img src={about3} alt="about2" />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default AboutUs;