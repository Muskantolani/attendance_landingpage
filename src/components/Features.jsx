import React from 'react';
import { features1, features2, features3 } from "./Images"

const Features = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row md:flex-col justify-between md:justify-normal sm:space-x-2 md:space-x-0 items-center px-5 md:px-0 py-20 bg-primary">
        <div className="flex flex-col md:flex-row items-center md:items-start pt-10 md:pt-0 h-[485px] md:h-64 w-80 xs:w-96 sm:w-1/3 md:w-3/4 bg-gray-200/20 rounded-3xl md:mb-12 border-2 md:me-36">
          <img src={features1} alt="Feature 1" className="w-2/4 md:w-4/12 object-cover rounded-lg ml-5" />
          <div className="p-2 md:p-4 text-white">
            <h3 className="font-bold mb-2 mt-2 md:mt-5 text-center md:text-start text-xl md:text-2xl lg:text-[27px]">Automatic Attendance System using Facial Recognition!</h3>
            <p className="md:font-semibold mt-6 mb-10 md:mb-0 text-center md:text-start text-base lg:text-xl">Effortlessly mark attendance using cutting-edge facial recognition technology, ensuring accurate and secure tracking of student presence.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start mt-10 sm:mt-0 pt-10 md:pt-0 h-[485px] md:h-64 w-80 xs:w-96 sm:w-1/3 md:w-3/4 bg-gray-200/20 rounded-3xl md:mb-12 border-2 md:ml-24">
          <div className="p-2 md:p-4 text-white md:ml-10">
            <h3 className="font-bold mb-2 mt-2 md:mt-5 text-center md:text-start text-xl md:text-2xl lg:text-[27px]">Real-time Attendance Display</h3>
            <p className="md:font-semibold mt-6 mb-10 md:mb-0 text-center md:text-start text-base lg:text-xl">Instantly view attendance status, providing students with immediate access to their attendance records and promoting transparency in academic performance.</p>
          </div>
          <img src={features2} alt="Feature 2" className="w-2/3 md:w-4/12 rounded-lg " />
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start mt-10 sm:mt-0 pt-20 md:pt-0 h-[485px] md:h-64 w-80 xs:w-96 sm:w-1/3 md:w-3/4 bg-gray-200/20 rounded-3xl md:mb-12 border-2 md:me-36">
          <img src={features3} alt="Feature 3" className="w-2/3 md:w-4/12 rounded-lg ml-5" />
          <div className="p-2 md:p-4 text-white md:me-10">
            <h3 className="font-bold mb-2 mt-2 md:mt-5 text-center md:text-start text-xl md:text-2xl lg:text-[27px]">Integrated Excel Sheet</h3>
            <p className="md:font-semibold mt-6 mb-10 md:mb-0 text-center md:text-start text-base lg:text-xl">Seamlessly download attendance data into an integrated Excel sheet, simplifying record-keeping and administrative tasks for efficient management.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;