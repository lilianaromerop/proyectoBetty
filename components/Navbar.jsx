import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="bg-white mb-8 md:mb-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
        
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
          
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="font-bold text-black text-4xl">BEATRIZ'S ART</h1>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex justify-between space-x-8">
                  <a href="/" className="text-black font-normal underline underline-offset-8 px-3 py-2 rounded-md text-sm " aria-current="page">Inicio</a>
                  <a href="/bio" className="text-gray-400 font-normal hover:text-gray-400 hover:underline underline-offset-8 px-3 py-2 text-sm">Biografía</a>
                  <a href="/contacto" className="text-gray-400 font-normal hover:text-gray-400 hover:underline underline-offset-8 px-3 py-2 text-sm ">Contacto</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-0 pt-2 ">
            <a href="#" className="bg-black text-center text-white block px-3 py-4 text-sm font-normal" aria-current="page">Inicio</a>
            <a href="#" className="bg-black text-center text-gray-300 block px-3 py-3 text-sm font-normal">Biografía</a>
            <a href="#" className=" bg-black text-center text-gray-300 block px-3 py-4  text-sm font-normal">Contacto</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar