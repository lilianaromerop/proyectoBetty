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
  <div className="container mt-24 mb-24 max-w-7xl mx-auto items-center justify-center flex flex-col md:justify-between md:flex-row">
      <div className="space-x-5 px-2 sm:px-6 lg:px-8">
          <Icon className="cursor-pointer hover:text-red-400" component={FacebookRoundedIcon} inheritViewBox />
          <Icon className="cursor-pointer hover:text-red-400" component={InstagramIcon} inheritViewBox />
      </div>
      <div className='w-48'>
        <Svg/>
      </div>
  </div>
    
  </>
  )
}

export default Footer

