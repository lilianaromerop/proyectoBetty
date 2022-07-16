import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'




library.add(fab, faFacebook)

const Footer2 = () => {
  return (
  <>
  <div className="text-center">
      <div className="mt-14 sm:mt-0 text-xs text-gray-500">©2022 Beatriz Apellido. All rights reserved.</div>
  </div>
  <div>
      <a
        href="https://wa.me/2348100000000"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
    
  </>
  )
}

export default Footer2

