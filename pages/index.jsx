import styles from '../styles/Home.module.css'
import {Typography} from '@mui/material'
import { Layout } from '../components/layout/Layout'
import { useState } from 'react'
import ModalDetalle from '../components/ModalDetalle'

const Galeria =[
  {
    src:'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    alt:'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
  },
  {
    src:'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
  },
  {
    src:'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
  },
  {
    src:'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
  },
  {
    src:'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
  },

]

export default function Home() {

  return (
    <Layout>
      <div className="">
        <div className="px-2 sm:px-0 sm:flex col-span-5 w-4/4 ">
          {/* FILTROS */}
            <div className="px-4 flex mb-12 sm:flex-col sm:px-0 ">
              <span className="cursor-pointer underline underline-offset-8 text-black text-right sm:py-4 pr-6 text-sm sm:w-44 lg:w-48 sm:bg-black sm:text-white sm:no-underline">Abstracto</span>
              <span className="cursor-pointer text-gray-400 text-right hover:text-white hover:bg-black sm:py-4 pr-6 text-sm sm:w-44 lg:w-48">Paisajes</span>
              <span className="cursor-pointer text-gray-400 text-right hover:text-white hover:bg-black sm:py-4 pr-6 text-sm sm:w-44 lg:w-48">Retratos</span>
            </div>
          {/* GALERIA */}
          <div>
          <div>
              <div className="max-w-7xl mx-auto px-9 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto lg:max-w-none">
                  <div className="grid space-y-0 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                    {Galeria.map((item,index)=>(
                      <Cuadro src={item.src} alt={item.alt} key={index}/>

                    ))}
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


const Cuadro = ({src, alt}) =>{
  const [open,setOpen] = useState(false)
  const [textOver,setTextOver] = useState (false)
  return(
    <div>
      <div onMouseOver={()=>setTextOver(true)} onClick={()=>setOpen(true)} className="group relative bg-black cursor-pointer">
        <div className="relative w-auto h-auto bg-white overflow-hidden group-hover:opacity-20 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <img src={src} alt={alt} className="w-full h-full object-center object-cover"/>
        </div>
      </div>
      {open ? (<ModalDetalle setOpen={setOpen}/>):null}
      {textOver ? (
      <div className="group relative bg-black cursor-pointer">
        <div className="relative w-auto h-auto bg-white overflow-hidden group-hover:opacity-20 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          hola
        </div>
      </div>
      ):null}
    </div>
    
  )
}