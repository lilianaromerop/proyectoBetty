import React from 'react'

const Filtros = () => {
  return (
    <div>
         <div className="px-4 flex mb-12 sm:flex-col sm:px-0">
            <span className="cursor-pointer underline underline-offset-8 text-black text-right sm:py-4 pr-6 text-sm sm:w-40 lg:w-48 sm:bg-black sm:text-white sm:no-underline">Abstracto</span>
            <span className="cursor-pointer text-gray-400 text-right hover:text-white hover:bg-black sm:py-4 pr-6 text-sm sm:w-40 lg:w-48">Paisajes</span>
            <span className="cursor-pointer text-gray-400 text-right hover:text-white hover:bg-black sm:py-4 pr-6 text-sm sm:w-40 lg:w-48">Retratos</span>
        </div>
    </div>
  )
}

export default Filtros