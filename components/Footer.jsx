import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Icon } from '@mui/material';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import Svg from '../utils/Svg'



library.add(fab, faFacebook)

const Footer = () => {
  return (
  <>
  <div className="container mb-4 items-center justify-center flex flex-col sm:justify-between sm:flex-row">
      <div className="space-x-5 sm:mb-10 sm:px-6 lg:px-8 sm:mt-8">
          <Icon className="cursor-pointer hover:text-indigo-400" component={FacebookRoundedIcon} inheritViewBox />
          <Icon className="cursor-pointer hover:text-indigo-400" component={InstagramIcon} inheritViewBox />
      </div>
      <div className="mt-14 sm:mt-0 text-xs text-gray-500">©2022 Beatriz Apellido. All rights reserved.</div>
      <div className='mt-16 sm:mt-0 w-48'>
        <Svg/>
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
  </div>
    
  </>
  )
}

export default Footer

