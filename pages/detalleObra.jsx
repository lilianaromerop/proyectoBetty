import React from 'react'
import { Layout } from '../components/layout/Layout'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Icon } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';


const detalle = () => {
  return (
    <Layout>
        <div>
        <div className="z-10" role="dialog" aria-modal="true">
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
                    <div className="w-full ">
                      <div>
                          <div className="flex">
                            <div className="w-96 overflow-hidden">
                              <img src="http://artscad.com/A-Imgs.nsf/0/9D37872E08BA0CF9C125821E0037CC95/$FILE/Victor-ovsyannikov-.Jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="w-auto h-auto object-center object-cover"/>
                              <div className="mt-6 space-x-5 ">
                                  <Icon className="cursor-pointer text-gray-400 hover:text-indigo-400" component={FacebookRoundedIcon} inheritViewBox />
                                  <Icon className="cursor-pointer text-gray-400 hover:text-indigo-400" component={InstagramIcon} inheritViewBox />
                                  <Icon className="cursor-pointer text-gray-400 hover:text-indigo-400" component={ShareIcon} inheritViewBox />
                              </div>
                            </div>
                            <div className="w-3/4 ml-14 mt-4">
                                <h2 className="text-xl text-gray-900 sm:pr-12">Nombre de la Obra</h2>
                                  <p className="text-sm font-thin text-gray-500">Abril 2022</p>
                                  <section aria-labelledby="options-heading" className="mt-10">
                                    <section aria-labelledby="information-heading" className="">
                                      <p className="text-sm font-thin text-gray-900">Óleo sobre Lienzo | 61 x 91 cms</p>
                                    </section>
                                    <section className="mt-4">
                                      <p className="text-sm font-thin text-gray-900">Descripción de la obra sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Descripción de la obra sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Descripción de la obra sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Descripción de la obra sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </section>
                                    <section aria-labelledby="information-heading" className="mt-12">
                                      <h6 className="text-sm font-thin text-gray-900 sm:pr-12">Precio</h6>
                                      <p className="text-xl font-medium text-indigo-600">$500.000 pesos</p>
                                      <form>
                                        <button type="submit" className="mt-6 justify-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                          <Icon className="cursor-pointer mr-3" component={WhatsAppIcon} inheritViewBox />Pedir por whatsapp
                                        </button>
                                      </form>
                                    </section>
                                    
                                  </section>
                                </div>
                            </div>
                          </div>
                          
                      <div className="sm:col-span-8 lg:col-span-7 mt-8 ml-4">
                        
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

export default detalle