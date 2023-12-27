import React from 'react'

const Footer = () => {
  return (
    <>
        

<footer>
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 text-white">
              brand name and logo
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-xl font-bold text-white">Menu</h2>
                  <ul className="text-gray-500 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline hover:text-white">Home</a>
                      </li>
                      <li className='mb-4'>
                          <a href="#" className="hover:underline hover:text-white">Features</a>
                      </li>
                      <li className='mb-4'>
                          <a href="#" className="hover:underline hover:text-white">About Us</a>
                      </li>
                      <li className='mb-4'>
                          <a href="#" className="hover:underline hover:text-white">Contact</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-xl font-bold text-white">Follow us</h2>
                  <ul className="text-gray-500 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline hover:text-white">Github</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline hover:text-white">Instagram</a>
                      </li>
                      <li className="mb-4">
                          <a href="#" className="hover:underline hover:text-white">Facebook</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-xl font-bold text-white">Legal</h2>
                  <ul className="text-gray-500 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline hover:text-white">Privacy Policy</a>
                      </li>
                      <li className='mb-4'> 
                          <a href="#" className="hover:underline hover:text-white">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2024 <a href="#" className="hover:underline">Brand</a>
          </span>
          
      </div>
    </div>
</footer>

    </>
  )
}

export default Footer