import styles from '../styles/Home.module.css'
import {Typography} from '@mui/material'
import { Layout } from '../components/layout/Layout'
import { useState } from 'react'
import ModalDetalle from '../components/ModalDetalle'
import Zoom from 'react-img-zoom'
import Image from 'next/image'

const Galeria =[
  {
    src:'https://cdn.shopify.com/s/files/1/0402/7029/9298/products/VMN_2550461a-5aff-4f29-a291-8a9850bb6e05_1260x.png?v=1617653798',
    alt:'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
  },
  {
    src:'https://www.artmajeur.com/medias/standard/j/o/josemi/artwork/1637505_50_x_30_Bodegon_Horizontal_002.jpg',
    alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
  },
  {
    src:'http://artscad.com/A-Imgs.nsf/0/9D37872E08BA0CF9C125821E0037CC95/$FILE/Victor-ovsyannikov-.Jpg',
    alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
  },
  {
    src:'https://i0.wp.com/arteyregalosperu.com/wp-content/uploads/2022/04/40x50-cuadro-kirby-and-the-forgotten-land-la-tierra-olvidada-nintendo-negro-horizontal.jpg?fit=1080%2C1080&ssl=1',
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
        <div className="px-2 mb-8 sm:px-0 sm:flex col-span-5 w-4/4 ">
          {/* FILTROS */}
            <div className="px-4 flex mb-12 sm:flex-col sm:px-0">
              <span className="cursor-pointer underline underline-offset-8 text-black text-right sm:py-4 pr-6 text-sm sm:w-40 lg:w-48 sm:bg-black sm:text-white sm:no-underline">Abstracto</span>
              <span className="cursor-pointer text-gray-400 text-right hover:text-white hover:bg-black sm:py-4 pr-6 text-sm sm:w-40 lg:w-48">Paisajes</span>
              <span className="cursor-pointer text-gray-400 text-right hover:text-white hover:bg-black sm:py-4 pr-6 text-sm sm:w-40 lg:w-48">Retratos</span>
            </div>
          {/* GALERIA */}
          <div>
          <div>
              <div className="max-w-7xl mx-auto px-9 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto lg:max-w-none">
                  <div className="grid space-y-0 gap-x-3 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
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
      <div onMouseOver={()=>setTextOver(true)} onClick={()=>setOpen(true)} className="img-zoom-container group relative bg-black cursor-pointer">
        <div className="relative w-auto h-auto bg-white overflow-hidden group-hover:opacity-20 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
          <Image width="287" height="256" src={src} alt={alt} className="w-full h-full object-center object-cover"/>
        </div>
      </div>
      {open ? (<ModalDetalle setOpen={setOpen} src={src}/>):null}
      {/* {textOver ? (
      <div className="group relative bg-black cursor-pointer">
        <div className="relative w-auto h-auto bg-white overflow-hidden group-hover:opacity-20 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        </div>
      </div>
      ):null} */}
    </div>
    
    
  )
}