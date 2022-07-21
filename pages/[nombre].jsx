import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router';
import { Layout } from '../components/layout/Layout';
import { useEffect, useState } from 'react';
import Filtros from '../components/Filtros'
import { Icon } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Zoom from 'react-img-zoom';

const Galeria =[
  {
    nombre:'obra_1',
    src:'https://cdn.shopify.com/s/files/1/0402/7029/9298/products/VMN_2550461a-5aff-4f29-a291-8a9850bb6e05_1260x.png?v=1617653798',
    alt:'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
  },
  {
    nombre:'obra_2',
    src:'https://www.artmajeur.com/medias/standard/j/o/josemi/artwork/1637505_50_x_30_Bodegon_Horizontal_002.jpg',
    alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
  },
  {
    nombre:'obra_3',
    src:'http://artscad.com/A-Imgs.nsf/0/9D37872E08BA0CF9C125821E0037CC95/$FILE/Victor-ovsyannikov-.Jpg',
    alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
  },
  {
    nombre:'obra_4',
    src:'https://i0.wp.com/arteyregalosperu.com/wp-content/uploads/2022/04/40x50-cuadro-kirby-and-the-forgotten-land-la-tierra-olvidada-nintendo-negro-horizontal.jpg?fit=1080%2C1080&ssl=1',
    alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
  },
  {
    nombre:'obra_5',
    src:'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
  },
]

// const items = [
//   <Image width="287" height="300" src={Galeria[0].src} className="w-full h-full object-center object-cover "/>,
//   <Image width="287" height="300" src={Galeria[1].src} className="w-full h-full object-center object-cover mx-2"/>
// ];

const Nombre = ({dataCuadro}) => {
  console.log(dataCuadro)
  return (
    <Layout>
      <div className="w-full sm:flex">
        <Filtros/>
      <div>
          <div className="px-9 mb-10 lg:flex">
            <div>
              <div className="justify-center">
                <Zoom
                  img={dataCuadro.src}
                  zoomScale={3}
                  width={300}
                  height={310}
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                />
              </div>
            </div>
            <div className=" lg:w-4/4 mt-8 lg:ml-14 md:ml-0 sm:mt-4">
                <h2 className="text-xl text-gray-900 sm:pr-12">{dataCuadro.nombre}</h2>
                  <p className="text-sm font-thin text-gray-500">Abril 2022</p>
                  <section aria-labelledby="options-heading" className="mt-10">
                    <section aria-labelledby="information-heading">
                      <p className="text-sm font-thin text-gray-900">Paisaje | Óleo sobre Lienzo | 61 x 91 cms</p>
                    </section>
                    <section className="mt-4">
                      <p className="text-sm font-thin text-gray-900">Descripción de la obra sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Descripción de la obra sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Descripción de la obra sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Descripción de la obra sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </section>
                  </section>
            </div>
          </div>
          <div className="px-9 mb-10 lg:flex">
            <div>
              <div className="justify-center">
                <Zoom
                  img={''}
                  width={300}
                  />
              </div>
            </div>
            <div className=" lg:w-4/4 mt-8 lg:ml-14 md:ml-0 sm:mt-4">
            <section aria-labelledby="information-heading" className="w-full">
                  <h6 className="text-sm font-thin text-gray-900 sm:pr-12">Precio</h6>
                  <p className="text-2xl font-medium text-indigo-600">$500.000 pesos</p>
                  <form>
                    <button type="submit" className="w-full mt-10 sm:mt-6 justify-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 sm:flex text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <Icon className="cursor-pointer mr-3" component={WhatsAppIcon} inheritViewBox />Pedir por whatsapp
                    </button>
                  </form>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-24">
        {/* <AliceCarousel mouseTracking items={items} /> */}
        {/* <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 4,
              partialVisibilityGutter: 10
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 3,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="relative w-auto h-auto overflow-hidden group-hover:opacity-20 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <Image width="240" height="200" src={Galeria[0].src}  alt={item.alt} className="w-full h-full mt-2 object-center object-cover"/>
          </div>
          <div className="relative w-auto h-auto bg-white overflow-hidden group-hover:opacity-20 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <Image width="287" height="300" src={Galeria[1].src} className="w-full h-full object-center object-cover mx-2"/>
          </div>
          <div className="relative w-auto h-auto overflow-hidden group-hover:opacity-20 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <Image width="287" height="300" src={Galeria[2].src} className="w-full h-full object-center object-cover"/>
          </div>
          <div className="relative w-auto h-auto bg-white overflow-hidden group-hover:opacity-20 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <Image width="287" height="300" src={Galeria[3].src} className="w-full h-full object-center object-cover"/>
          </div>
          <div className="relative w-auto h-auto bg-white overflow-hidden group-hover:opacity-20 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <Image width="287" height="300" src={Galeria[4].src} className="w-full h-full object-center object-cover"/>
          </div>
        </Carousel> */}
      </div>
    </Layout>

  )

}

export default Nombre


export const getStaticPaths = async (ctx) => {
//     // const { data } = await  // your fetch function here 
  const nombres = Galeria.map(cuadro => cuadro.nombre) 
    return {
        paths: nombres.map(nombre => ({

          params:{nombre}

        })),
        fallback: "blocking"
    }
}

export const getStaticProps = async ({params}) => {
  const {nombre} = params;

  const Galeria1 =[
    {
      nombre:'obra_1',
      src:'https://cdn.shopify.com/s/files/1/0402/7029/9298/products/VMN_2550461a-5aff-4f29-a291-8a9850bb6e05_1260x.png?v=1617653798',
      alt:'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
    },
    {
      nombre:'obra_2',
      src:'https://www.artmajeur.com/medias/standard/j/o/josemi/artwork/1637505_50_x_30_Bodegon_Horizontal_002.jpg',
      alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
    },
    {
      nombre:'obra_3',
      src:'http://artscad.com/A-Imgs.nsf/0/9D37872E08BA0CF9C125821E0037CC95/$FILE/Victor-ovsyannikov-.Jpg',
      alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
    },
    {
      nombre:'obra_4',
      src:'https://i0.wp.com/arteyregalosperu.com/wp-content/uploads/2022/04/40x50-cuadro-kirby-and-the-forgotten-land-la-tierra-olvidada-nintendo-negro-horizontal.jpg?fit=1080%2C1080&ssl=1',
      alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
    },
    {
      nombre:'obra_5',
      src:'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
      alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
    },
  ]

  const dataCuadro = Galeria1.filter(cuadro => cuadro.nombre === nombre)[0]

  return {
    props: {
      dataCuadro
    }
  }
}


