import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav class="bg-white mb-6">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
        
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
          
                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
              <div class="flex-shrink-0 flex items-center">
                <h1 className="font-bold text-black text-4xl">BEATRIZ'S ART</h1>
              </div>
              <div class="hidden sm:block sm:ml-6">
                <div class="flex justify-between space-x-8">
                  <a href="#" className="text-black font-normal underline underline-offset-8 px-3 py-2 rounded-md text-sm " aria-current="page">Inicio</a>
                  <a href="#" className="text-gray-400 font-normal hover:text-gray-400 hover:underline underline-offset-8 px-3 py-2 text-sm ">Biografía</a>
                  <a href="#" className="text-gray-400 font-normal hover:text-gray-400 hover:underline underline-offset-8 px-3 py-2 text-sm ">Contacto</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:hidden" id="mobile-menu">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Inicio</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Biografía</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contacto</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar