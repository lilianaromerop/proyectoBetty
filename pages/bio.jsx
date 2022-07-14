import React from 'react'
import { Layout } from '../components/layout/Layout'

const bio = () => {
  return (
    <Layout>
        <div className="container mt-24 mb-24 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 sm:flex sm:space-x-10">
            <img className="sm:h-96" src="https://i.pinimg.com/originals/34/b9/72/34b972b6cfe7eed1ff16b493c7186021.jpg"/>
            <div className="w-full text-center">
                <h1 className="mt-8 text-xl font-medium text-gray-900">Beatríz Apellido</h1>
                <p className="font-thin text-gray-500">Artista Colombiana</p>
                <p className="mt-12 text-sm text-left mx-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

        
            </div>
        </div>
    </Layout>
  )
}

export default bio