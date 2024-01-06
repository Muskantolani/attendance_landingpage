import React from 'react';
import { contact } from './Images';

const Contact = () => {
  return (
    <>

      <div className='flex flex-col lg:flex-row justify-center items-center'>
        <div className="w-1/2 lg:w-auto lg:ml-10 lg:mx-48 my-24">
          <h2 className="text-4xl sm:ml-32 md:ml-48 lg:ml-32 font-bold text-gray-900 mb-10">Contact Us</h2>
          <form action="#" method="POST">
            <div className="grid xs:grid-rows-1 sm:grid-cols-1 gap-x-8 gap-y-6">
              <div className='row-span-1'>
                <label htmlFor="first-name" className="text-base font-semibold text-gray-900">
                  First name
                </label>
                <div className="mt-1">
                  <input type="text" className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:outline-none" />
                </div>
              </div>
              <div className='row-span-1'>
                <label htmlFor="last-name" className="text-base font-semibold text-gray-900">
                  Last name
                </label>
                <div className="mt-1">
                  <input type="text" className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none" />
                </div>
              </div>
              <div className="xs:row-span-1 sm:col-span-2">
                <label htmlFor="email" className="text-base font-semibold text-gray-900">
                  Email ID
                </label>
                <div className="mt-1">
                  <input type="text" className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none" />
                </div>
              </div>
              <div className="row-span-1 sm:col-span-2">
                <label htmlFor="phone" className="text-base font-semibold text-gray-900">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input type="text" className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none" />
                </div>
              </div>
              <div className="row-span-1 sm:col-span-2">
                <label htmlFor="message" className="text-base font-semibold text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea rows={4} className="w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none" />
                </div>
              </div>
            </div>
            <button className="rounded-xl font-semibold border-0 px-14 py-3 mt-6 ml-7 xs:ml-20 sm:ml-36 md:ml-56 lg:ml-36 mb-2 bg-callaction text-white active:bg-secondary duration-200 ease-in">
              Submit
            </button>
          </form>
        </div>
        <img src={contact} alt="Contact" className="hidden lg:block h-96" />
      </div>
    </>
  );
};

export default Contact;