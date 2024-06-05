import {React, useContext, useState,useEffect} from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios';

import { userContext } from '../components/UserContext'

const HomeNav = () => {
  const [redirect, setRedirect] = useState(null);
  const { user } = useContext(userContext);   
  const [userdata, setUserdata] = useState([])

  

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setUserdata(userInfo)
    }
  }, [])
  
  async function logout() {
    await axios.post('/logout')
    localStorage.removeItem('userInfo')
    setRedirect('/');
  }

  if(redirect) {
    return <Navigate to={redirect}/>
  }

  return (
    <nav className="bg-transparent border border-y-1 px-[3rem]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between h-16"> {/* MAIN FLEX CONTAINER */}
          <div className='flex'>
            <div className='flex justify-between items-center'>
            <img className='h-[3rem]' src="logo-black-nobg.png" alt="" />
          </div>
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* Your logo or site title */}
                
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8 justify-center items-center mr-[5rem]">
              {/* Navigation links */}
              <Link to="/" className="text-0gray-30 hover:bg-red-700 hover:text-white px-[3rem] py-2 rounded-md text-sm font-medium">Browse</Link>
              <Link to="/about" className="text-black hover:bg-red-700 hover:text-white px-[3rem] py-2 rounded-md text-sm font-medium">Routines</Link>
              <Link to="/library" className="text-black hover:bg-red-700 hover:text-white px-[3rem] py-2 rounded-md text-sm font-medium">Create</Link>
              {/* Add more navigation links as needed */}
            </div>
          </div>
          </div>
          
          {/* Right side navigation items, e.g., login/signup buttons */}
          <div className="hidden sm:flex sm:items-center sm:ml-6">
          {user && (
              <span className="text-black text-sm mr-4">Welcome, {userdata.data?.username}</span>
            )}
            <Link to={user?'/profile' : '/login'}>Profile</Link>
            <button onClick={logout}>Logout</button>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HomeNav