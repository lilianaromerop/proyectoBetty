import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import { Layout } from '../../components/layout/Layout'
import { useEffect, useState } from 'react'

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

const Nombre = ({Galeria1}) => {
  // const [Galeria1,setGaleria1] = useState([])

  // useEffect(()=> {
  //   setGaleria1(
  //     Galeria
  //   )

  // },[])

  const router = useRouter()
  const { nombre } = router.query
  console.log(nombre)
  console.log(Galeria1)
  return (
    <div>
      <Head>
        <title>{Galeria1.filter(cuadro => cuadro.nombre === nombre)[0]?.nombre}</title>
      </Head>
      <Layout>
        <h1>{Galeria1.filter(cuadro => cuadro.nombre === nombre)[0]?.nombre}</h1>
        <Test/>
      </Layout>
    </div>
  )
}

export default Nombre

const Test = () => {
  const router = useRouter()
  const { nombre } = router.query
  const [Galeria2,setGaleria2] = useState([])

  useEffect(()=> {
    setGaleria2(
      Galeria
    )

  },[])

  return(
    <h1>{Galeria2.filter(cuadro => cuadro.nombre === nombre)[0]?.nombre}</h1>
  )
}


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
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

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async (ctx) => {

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
//   // const { data } = await  // your fetch function here 

  return {
    props: {
      Galeria1
    }
  }
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// export const getServerSideProps = async (ctx) => {

//   const Galeria1 =[
//         {
//           nombre:'obra_1',
//           src:'https://cdn.shopify.com/s/files/1/0402/7029/9298/products/VMN_2550461a-5aff-4f29-a291-8a9850bb6e05_1260x.png?v=1617653798',
//           alt:'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.'
//         },
//         {
//           nombre:'obra_2',
//           src:'https://www.artmajeur.com/medias/standard/j/o/josemi/artwork/1637505_50_x_30_Bodegon_Horizontal_002.jpg',
//           alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
//         },
//         {
//           nombre:'obra_3',
//           src:'http://artscad.com/A-Imgs.nsf/0/9D37872E08BA0CF9C125821E0037CC95/$FILE/Victor-ovsyannikov-.Jpg',
//           alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
//         },
//         {
//           nombre:'obra_4',
//           src:'https://i0.wp.com/arteyregalosperu.com/wp-content/uploads/2022/04/40x50-cuadro-kirby-and-the-forgotten-land-la-tierra-olvidada-nintendo-negro-horizontal.jpg?fit=1080%2C1080&ssl=1',
//           alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
//         },
//         {
//           nombre:'obra_5',
//           src:'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
//           alt:'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.'
//         },
  
//       ]

//   // const { data } = await  // your fetch function here 

//   return {
//     props: {
//       Galeria1
//     }
//   }
// }

