import React from 'react'
import { Layout2 } from '../components/layout/Layout2'
import BettyWhite from '../utils/BettyWhite'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Icon } from '@mui/material';

const contacto = () => {
return (
<Layout2>
    <div className="bg-black">
        <div className="flex max-w-8xl mx-auto items-center justify-center space-x-40">
            <div className="bg-black w-96 my-8">
                <form className="text-right">
                    <label className="flex flex-col">
                    Nombre:
                    <input className="rounded-sm p-1" type="text" name="nombre" placeholder="NOMBRE" required/>
                    </label>
                    <label className="flex flex-col">
                    Celular:
                    <input className="rounded-sm p-1" type="text" name="celular" placeholder="CELULAR" required/>
                    </label>
                    <label className="flex flex-col">
                    E-mail:
                    <input className="rounded-sm p-1" type="text" name="email" placeholder="EMAIL" required/>
                    </label>
                    <label className="flex flex-col">
                    Tu mensaje:
                    <textarea className="rounded-sm p-1" type="text" name="nombre" placeholder="TU MENSAJE" required/>
                    </label>
                    <button className="bg-cyan-400 text-right text-white font-semibold text-sm py-3 px-4 mt-6  rounded-md self-center" type="submit" value="ENVIAR">ENVIAR</button>
                </form>
            </div>
            <div className=" w-96 flex flex-col ">
                <div className="flex justify-center">
                    <BettyWhite/>
                </div>
                <div className="text-white w-96 text-center">
                     <h1 className="text-base mt-4">Beatríz Apellido</h1>
                     <p className="mt-3 text-sm font-thin">Envigado - Antioquia - Colombia</p>
                     <p className="text-sm font-thin">+57 3002345678</p>
                </div>
                <div className="mt-6 space-x-5 sm:mb-10 sm:px-6 lg:px-8 text-center">
                      <Icon className="text-white cursor-pointer hover:text-indigo-400" component={FacebookRoundedIcon} inheritViewBox />
                      <Icon className="text-white cursor-pointer hover:text-indigo-400" component={InstagramIcon} inheritViewBox />
                </div>
            </div>
            
        </div>
    </div>
</Layout2>
)
}

export default contacto