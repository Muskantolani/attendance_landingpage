import React from 'react';
import { features1, features2, features3 } from "./Images"

const Features = () => {
  return (
    <>
      <div className="flex flex-col items-center py-20">
        <div className="flex h-64 w-3/4 bg-gray-200/20 rounded-3xl mb-12 border-2 me-36">
          <img src={features1} alt="Feature 1" className="h-full object-cover rounded-lg ml-5" />
          <div className="p-4 text-white">
            <h3 className="font-bold mb-2 mt-5 text-[27px]">Automatic Attendance System using Facial Recognition!</h3>
            <p className="font-semibold mt-6 text-xl">Effortlessly mark attendance using cutting-edge facial recognition technology, ensuring accurate and secure tracking of student presence.</p>
          </div>
        </div>

        <div className="flex h-64 w-3/4 bg-gray-200/20 rounded-3xl mb-12 border-2 ml-24">
          <div className="p-4 text-white ml-10">
            <h3 className="font-bold mb-2 mt-5 text-[27px]">Real-time Attendance Display</h3>
            <p className="font-semibold mt-6 text-xl">Instantly view attendance status, providing students with immediate access to their attendance records and promoting transparency in academic performance.</p>
          </div>
          <img src={features2} alt="Feature 2" className="h-full me-10 object-cover rounded-lg" />
        </div>

        <div className="flex h-64 w-3/4 bg-gray-200/20 rounded-3xl border-2 me-36">
          <img src={features3} alt="Feature 3" className="h-full ml-10 object-cover rounded-lg" />
          <div className="p-4 text-white me-10">
            <h3 className="font-bold mb-2 mt-5 text-[27px]">Integrated Excel Sheet</h3>
            <p className="font-semibold mt-6 text-xl">Seamlessly download attendance data into an integrated Excel sheet, simplifying record-keeping and administrative tasks for efficient management.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;