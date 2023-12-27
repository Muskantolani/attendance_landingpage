import React from 'react';
import features1 from '../assests/features1.png';
import features2 from '../assests/features2.png';
import features3 from '../assests/features3.png';

const Features = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="feature-box flex w-100 h-64 bg-gray-200 rounded-lg shadow-lg mb-4 overflow-hidden transition duration-300 hover:bg-gray-300 ml-20">
        <img src={features1} alt="Feature 1" className="w-100 h-full object-cover rounded-l-lg" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 mt-10 text-2xl">Automatic Attendance System using Facial Recognition!</h3>
          <p className="text-gray-700 text-xl">Effortlessly mark attendance using cutting-edge facial recognition <br />technology, ensuring accurate and secure tracking of student presence.</p>
        </div>
      </div>

      <div className="feature-box flex w-100 h-64 bg-gray-200 rounded-lg shadow-lg mb-4 overflow-hidden transition duration-300 hover:bg-gray-300">
        <img src={features2} alt="Feature 2" className="w-1/2 h-full object-cover rounded-l-lg" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 mt-10 text-2xl">Real-time Attendance Display</h3>
          <p className="text-gray-700 text-xl">Instantly view attendance status, providing students <br />with immediate access to their attendance records and <br />promoting transparency in academic performance.</p>
        </div>
      </div>

      <div className="feature-box flex w-100 h-64 bg-gray-200 rounded-lg shadow-lg mb-4 overflow-hidden transition duration-300 hover:bg-gray-300 ml-20">
        <img src={features3} alt="Feature 3" className="w-1/2 h-full object-cover rounded-l-lg" />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 mt-10 text-2xl">Integrated Excel Sheet</h3>
          <p className="text-gray-700 text-xl">Seamlessly download attendance data <br />into an integrated Excel sheet, simplifying <br />record-keeping and administrative tasks <br />for efficient management.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;