import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContent } from '../context/AppContext'

function Header() {

         const {userData} = useContext(AppContent)

  return (
    <div className='flex flex-col items-center mt-20 px-4 text-center text-pink-500'>

      <img src={assets.header_img} alt="" className='w-36 h-36 rounded-full mb-6'/>

      <h1 className='flex items-center gap-2 text-xl sm:text-3xl font-medium mb-2'>Hii {userData ? userData.name : 'Developer'} !
        <img className='w-8 aspect-square' src={assets.hand_wave} alt="" /></h1>

      <h2 className='text-3xl sm:text-5xl font-semibold mb-4'>Welcome to our app</h2>

      <p className='mb-8 max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, magnam!</p>

      <button className='border border-amber-500 rounded-full px-8 py-2.5 hover:bg-gray-300 transition-all cursor-pointer '>Get Started</button>

    </div>
  )
}

export default Header
