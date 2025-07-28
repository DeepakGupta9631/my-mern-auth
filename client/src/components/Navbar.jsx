import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext'

const Navbar = () => {

const navigate = useNavigate()
const {userData, backendUrl, setUserData, setIsLoggedin} = useContext(AppContent)
       
  return (
    <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px4 absolute top-0'>
      <img src={assets.logo} alt="" className='w-8 sm:w-32'/>
      {userData ?
      <div>
        {userData.name[0].toUpperCase()}
      </div>
      :  <button onClick={()=>navigate('/login')}
      className='flex items-center gap-6 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-200 transition-all cursor-pointer'>login <img src={assets.arrow_icon} alt="" /></button>
      }
    </div>
  )
}

export default Navbar
