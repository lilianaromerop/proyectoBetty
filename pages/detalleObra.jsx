import React from 'react'
import { Layout } from '../components/layout/Layout'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Icon } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const biografia = () => {
  return (
    <Layout>
        <div>
        <div className="relative z-10" role="dialog" aria-modal="true">
            <div className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4">
                <div className="flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl">
                  <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                    <button type="button" className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8">
                      <span className="sr-only">Close</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                      <div className="aspect-w-2 aspect-h-6 bg-black overflow-hidden sm:col-span-4 lg:col-span-5">
                        <div className="h-96">hola</div>
                        {/* <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-auto h-auto object-center object-cover"/> */}
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7 mt-8 ml-4">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">Nombre de la Obra</h2>
                        <p className="text-md text-gray-900">Abril 2022</p>
                      
                        <section aria-labelledby="options-heading" className="mt-10">
                          <section aria-labelledby="information-heading" className="">
                            <p className="text-md text-gray-900">Óleo sobre Lienzo | 61 x 91 cms</p>
                          </section>
                          <section aria-labelledby="information-heading" className="mt-10">
                            <p className="text-md text-gray-900">Descripción de la obra sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                          </section>
                          <section aria-labelledby="information-heading" className="mt-10">
                            <h6 className="text-sm text-gray-900 sm:pr-12">Precio</h6>
                            <p className="text-xl font-extrabold text-indigo-600">$500.000 pesos</p>
                          </section>
                          <form>
                            <button type="submit" className="mt-32 w-full bg-indigo-600 mb-8 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              <Icon className="cursor-pointer mr-3" component={WhatsAppIcon} inheritViewBox />Pedir por whatsapp
                              </button>
                          </form>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default biografia