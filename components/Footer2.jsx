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
    
  </>
  )
}

export default Footer2

