import React from 'react'

const Footer = () => {
    return (
        <>


            <footer>
                <div className="p-4 py-8 mx-28">
                    <div className="flex justify-between">
                        <div className="mb-6 md:mb-0 text-white">
                            brand name and logo
                        </div>
                        <div className="flex flex-row space-x-20">
                            <div>
                                <h2 className="mb-5 text-2xl font-semibold text-white">Menu</h2>
                                <ul className="text-white font-normal">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline focus:underline-none">Home</a>
                                    </li>
                                    <li className='mb-4'>
                                        <a href="#" className="hover:underline focus:underline-none">Features</a>
                                    </li>
                                    <li className='mb-4'>
                                        <a href="#" className="hover:underline focus:underline-none">About Us</a>
                                    </li>
                                    <li className='mb-4'>
                                        <a href="#" className="hover:underline focus:underline-none">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-5 text-2xl font-semibold text-white">Follow us</h2>
                                <ul className="text-white font-normal">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline focus:underline-none">Github</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline focus:underline-none">Instagram</a>
                                    </li>
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline focus:underline-none">Facebook</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-5 text-2xl font-semibold text-white">Legal</h2>
                                <ul className="text-white font-normal">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline focus:underline-none">Privacy Policy</a>
                                    </li>
                                    <li className='mb-4'>
                                        <a href="#" className="hover:underline focus:underline-none">Terms & Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="w-full border-white my-8" />
                    <div className="flex items-center justify-center">
                        <span className="text-sm text-white sm:text-center">Brand Name © 2024
                        </span>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer