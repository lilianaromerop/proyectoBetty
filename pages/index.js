import styles from '../styles/Home.module.css'
import {Typography} from '@mui/material'
import { Layout } from '../components/layout/Layout'

export default function Home() {
  return (
    <Layout>
      <div class="grid grid-cols-5 gap-4">
        <div className="flex col-span-5 w-4/4">
        {/* FILTROS */}
          <div className="lg:flex flex-col sm:flex">
            <span className="bg-black text-white text-right py-4 pr-6 text-sm sm:w-44 lg:w-48">Abstracto</span>
            <span className=" text-gray-500 text-right py-4 pr-6 text-sm sm:w-44 lg:w-48">Paisajes</span>
            <span className=" text-gray-500 text-right py-4 pr-6 text-sm sm:w-44 lg:w-48">Retratos</span>
          </div>
        {/* GALERIA */}
        <div>
          <div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="max-w-2xl mx-auto lg:max-w-none">
                <div class="grid space-y-0 gap-x-6 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
                  <div class="group relative">
                    <div class="relative w-full h-80 bg-white overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="w-full h-full object-center object-cover"/>
                    </div>
                  </div>

                  <div class="group relative">
                    <div class="relative w-full h-80 bg-white overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="w-full h-full object-center object-cover"/>
                    </div>
                  </div>

                  <div class="group relative">
                    <div class="relative w-full h-80 bg-white overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="w-full h-full object-center object-cover"/>
                    </div>
                  </div>

                  <div class="group relative">
                    <div class="relative w-full h-80 bg-white overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="w-full h-full object-center object-cover"/>
                    </div>
                  </div>

                  <div class="group relative">
                    <div class="relative w-full h-80 bg-white overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="w-full h-full object-center object-cover"/>
                    </div>
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
