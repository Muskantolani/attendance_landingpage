import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import about1 from '../assests/about1.png';
import about2 from '../assests/about2.png';
import about3 from '../assests/about3.png';

const AboutUs = () => {
  return (
    <>
      <div className="w-full">
        <h2 className="text-3xl font-semibold tracking-tight text-center text-white mb-5 text-gray-900 sm:text-4xl underline">About Us</h2>
        <p className="text-center text-white mx-10 mt-10 text-xl mb-10">
          Embark on a journey with [Your Platform Name], where we fuse innovation with efficiency in attendance management for educational institutions and workplaces, saving time and boosting productivity.
        </p>
      </div>

      <div className="w-50 h-50 mx-auto mt-10">
      <Carousel showArrows={true} showThumbs={false} className="mt-10">
        {/* first slide*/}
        <div className="flex md:flex-row flex-col sm:py-16 py-6">
          <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="flex-1 font-poppins font-semibold text-[62px] text-[42px] text-black leading-[60px]">
                Our Vision <br className="sm:block hidden" />{" "}
              </h1>
            </div>
            <p className="font-normal text-dimWhite text-left text-[18px] leading-[20px] max-w-[450px] mt-5 ml-20">
              We aim to lead in attendance management by using cutting-edge AI, including facial recognition, to eliminate manual tracking, save time, and foster efficiency, creating thriving communities in educational institutions and workplaces
            </p>
          </div>

          <div className="flex-1 flex flex justify-center items-center md:my-0 my-10 relative w-50">
            <img src={about1} alt="about1" className="w-[100%] h-[100%] relative z-[5]" />
          </div>
        </div>

        {/* second  slide*/}
        <div className="flex md:flex-row flex-col sm:py-16 py-6">
          <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="flex-1 font-poppins font-semibold text-[62px] text-[42px] text-black leading-[60px]">
                Why choose us? <br className="sm:block hidden" />{" "}
              </h1>
            </div>
            <p className="font-normal text-dimWhite text-left text-[18px] leading-[30.8px] max-w-[450px] mt-5 ml-20">
              Opt for [Your Platform Name] for AI-powered efficiency in attendance tracking, a user-friendly interface catering to educators and administrators, real-time reporting for insightful analytics, and a community-focused approach fostering positive impacts on education and workplaces.
            </p>
          </div>

          <div className="flex-1 flex flex justify-center items-center md:my-0 my-10 relative w-50">
            <img src={about2} alt="about2" className="w-[50%] h-[80%] relative z-[5]" />
          </div>
        </div>

        {/* third slide*/}
        <div className="flex md:flex-row flex-col sm:py-16 py-6">
          <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="flex-1 font-poppins font-semibold text-[62px] text-[42px] text-black leading-[60px]">
                Our commitment  <br className="sm:block hidden" />{" "}
              </h1>
            </div>
            <p className="font-normal text-dimWhite text-left text-[18px] leading-[30.8px] max-w-[450px] mt-5 ml-20">
              [Your Platform Name] is dedicated to continuous improvement, technological advancement, and being your top choice for automated attendance solutions, supporting institutions in their growth and success journey.
            </p>
          </div>

          <div className="flex-1 flex flex justify-center items-center md:my-0 my-10 relative w-50">
            <img src={about3} alt="about3" className="w-[100%] h-[100%] relative z-[5]" />
          </div>
        </div>
      </Carousel>
      </div>
    </>
  );
};

export default AboutUs;