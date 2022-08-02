import Head from 'next/head'
import React from 'react'
import { Layout } from '../components/layout/Layout';
import Filtros from '../components/Filtros'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Cuadro from '../backEnd/model/cuadro'
import { Icon } from '@mui/material';
import Image from 'next/image'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Zoom from 'react-img-zoom';
import db from '../backEnd/db/mongoDb';


// const items = [
//   <Image width="287" height="300" src={Galeria[0].src} className="w-full h-full object-center object-cover "/>,
//   <Image width="287" height="300" src={Galeria[1].src} className="w-full h-full object-center object-cover mx-2"/>
// ];



const Nombre = ({dataCuadro}) => {

  Date.prototype.yyyymmdd = function() {
  var mm = this.getMonth() + 1; // getMonth() is zero-based
  var dd = this.getDate();

  return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
         ].join('');
};

  const dataCuadro1 = JSON.parse(dataCuadro)
  console.log(dataCuadro1)
  return (
    <Layout>
      <div className="w-full sm:flex">
        <Filtros/>
      <div>
          <div className="px-9 mb-10 lg:flex">
            <div>
              <div className="justify-center">
                <Zoom
                  img={dataCuadro1.imagen}
                  zoomScale={3}
                  width={300}
                  height={310}
                  alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                />
              </div>
            </div>
            <div className=" lg:w-4/4 mt-8 lg:ml-14 md:ml-0 sm:mt-4">
                <h2 className="text-xl text-gray-900 sm:pr-12">{dataCuadro1.nombre}</h2>
                  <p className="text-sm font-thin text-gray-500">{dataCuadro1.fechaCreacion}</p>
                  <section aria-labelledby="options-heading" className="mt-10">
                    <section aria-labelledby="information-heading">
                      <p className="text-sm font-thin text-gray-900">{dataCuadro1.categoria} | {dataCuadro1.tecnica} | {dataCuadro1.size} cms</p>
                    </section>
                    <section className="mt-4">
                      <p className="text-sm font-thin text-gray-900">{dataCuadro1.descripcion}</p>
                    </section>
                  </section>
            </div>
          </div>
          <div className="px-9 mb-10 lg:flex">
            <div>
              <div className="justify-center">
                <Zoom
                  img={''}
                  zoomScale={3}
                  width={300}
                  />
              </div>
            </div>
            <div className=" lg:w-4/4 mt-8 lg:ml-14 md:ml-0 sm:mt-4">
            <section aria-labelledby="information-heading" className="w-full">
                  <h6 className="text-sm font-thin text-gray-900 sm:pr-12">Precio</h6>
                  <p className="text-2xl font-medium text-indigo-600">${dataCuadro1.precio}</p>
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
  await db()
  const cuadros = await Cuadro.find({})
 

  const materiales = cuadros.map((doc) => {
    const material = doc.toObject();
    material._id = material._id.toString();
    return material
  });
  console.log(materiales)
  const nombres = materiales.map(cuadro => cuadro.nombre)

  
    return {
        paths: nombres.map(nombre => ({

          params:{nombre}

        })),
        fallback: "blocking"
    }
}

export const getStaticProps = async ({params}) => {
  await db()

  const dataCuadro = await Cuadro.find({nombre: params.nombre}) 

  return {
    props: {
      dataCuadro:JSON.stringify(dataCuadro[0])
    }
  }
}


