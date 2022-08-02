import { Layout } from '../components/layout/Layout'
import Image from 'next/image'
import 'react-multi-carousel/lib/styles.css';
import Filtros from '../components/Filtros';
import Link from 'next/link'
import traerGaleriaCompleta from '../services/traerGaleriaCompleta';
import { useState } from 'react';
import db from '../backEnd/db/mongoDb';
import Cuadro from '../backEnd/model/cuadro'


export default function Home({Galeria}) {
const Galeria1 = JSON.parse(Galeria)

  return (
    <Layout>
      <div className="">
        <div className="px-2 mb-8 sm:px-0 sm:flex col-span-5 w-4/4 ">
          {/* FILTROS */}
            <div className="px-4 flex mb-12 sm:flex-col sm:px-0">
            <Filtros/>
            </div>
          {/* GALERIA */}
          <div>
          <div>
              <div className="max-w-7xl mx-auto px-9 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto lg:max-w-none">
                  <div className="grid space-y-0 gap-x-3 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
                    {Galeria1.map((item,index)=>(
                      <CuadroVista item={item} key={index}/>
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


const CuadroVista = ({item}) =>{

  return(
    
    <div >
      <div className="img-zoom-container group relative bg-black cursor-pointer">
        <div className="relative w-auto h-auto bg-white overflow-hidden
         sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 ">
          <Link href={`/${item.nombre}`} >
            <a  >
              <Image width="287" height="300" src={item.imagen} alt={item.nombre} className="w-full h-full object-center object-cover"/>
              <div className='opacity-0 
                hover:opacity-100 absolute top-0 left-0 w-full 
                h-full flex flex-col justify-center items-center transition-opacity backdrop-blur-sm
                 bg-black/50 text-white'>
                <div className='image_title'>{item.nombre}</div>
                <div className='image__description'>{item.precio}</div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
    
    
  )
}


export const getStaticProps = async (ctx) => {

  await db()
  const Galeria = await Cuadro.find({})
  return {
    props: {
      Galeria:JSON.stringify(Galeria)
    }
  }
}