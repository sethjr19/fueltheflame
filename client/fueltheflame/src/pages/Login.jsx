import React, { useContext, useEffect, useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { userContext } from '../components/UserContext';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useContext(userContext);

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [])

   const handleLogin =  async(e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:3000/login ', {email,password});
      setUser(response) //setting our user using useContext
      if (response.status === 200) {
      alert('Login success');
      localStorage.clear();
      localStorage.setItem("userInfo", JSON.stringify(response)); //stores data into local storage
      navigate('/browse')
      }
      else {
        alert('No user found')
      }
    } catch(e) {
      alert('Login failed')
    }
  }

  return (
    <div className="flex min-h-screen max-h-[100vh] w-[100vw] justify-center overflow-hidden">

      <div className="flex flex-col grow justify-center max-w-lg w-[50vw] mx-[5rem] px-[3rem]">  
        <img className='pr-5' src="/logo-no-background.png" alt="Logo" />
        <div className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text" > 
          <h2 className="mt-6 text-center text-[2.5rem] font-bold">Sign In</h2>
        </div>
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text"
                
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>

            <div>
              <label className="sr-only">Password</label>
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 mt-[3rem] border border-transparent text-sm font-medium rounded-xl text-white bg-pink-500 hover:bg-pink-700 focus:outline-none transition-all"
            >
              Log In
            </button>
          </div>
        </form>
        <div className='mt-5 underline-offset-1 underline'>
          <p>Dont have an account? <Link to='/register'className='font-bold'>Register Here</Link></p>
        </div>
      </div>
      <div className='sm:w-0 w-0 lg:w-[100%] md:w-[100%] flex justify-end'>
        <img src="/gymlifts.jpg" alt="hero banner" className=' z-[-99] h-[100vh] object-cover'/>
      </div>
    </div>
  )
}

export default Login