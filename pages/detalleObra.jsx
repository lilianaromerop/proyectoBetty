import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Icon } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';
import Zoom from 'react-img-zoom'
import 'react-multi-carousel/lib/styles.css';
import { Layout } from '../components/layout/Layout'
import Filtros from '../components/Filtros';

const DetalleObra= ({src}) => {
  return (
    <Layout>
      <div className="w-full sm:flex">
        <Filtros/>
      <div>
          <div className="px-9 mb-20 lg:flex">
            <div>
              <div className="justify-center bg-black">
                <Zoom
                  img={src}
                  zoomScale={3}
                  width={300}
                  height={310}
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                />
              </div>
            </div>
            <div className="lg:x-4 lg:w-3/4 mt-8 lg:ml-14 md:ml-0 sm:mt-4">
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
                      <p className="text-2xl font-medium text-indigo-600">$500.000 pesos</p>
                      <form>
                        <button type="submit" className="w-full lg:w-2/4 mt-10 sm:mt-6 justify-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 sm:flex text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <Icon className="cursor-pointer mr-3" component={WhatsAppIcon} inheritViewBox />Pedir por whatsapp
                        </button>
                      </form>
                    </section>
                  </section>
                </div>
          </div>
      </div>
      </div>
    </Layout>

  )
}

export default DetalleObra
