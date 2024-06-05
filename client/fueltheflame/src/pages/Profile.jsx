import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../components/UserContext'
import { Link } from 'react-router-dom';
import Friend from '../components/Friend';
import axios from 'axios';
import HomeNav from '../components/HomeNav'

const Profile = () => {
const {user, loading} = useContext(userContext);
const [profile, setProfile] = useState('');
const [userdata, setUserdata] = useState([])

async function getCurrentUser() {
  
  if (loading) {
    return 'Loading...'
  }

  if(!user) {
  return <div>User not found</div>
  } 

  try {
    const getCurrentUser = await axios.get('http://localhost:3000/profile', {user})
    setUserdata(getCurrentUser)
    console.log('Current user data', getCurrentUser)
    } catch (err) {
        console.error('Error fetching users', err)
    }
  }

useEffect(() => {
  getCurrentUser();
  }, [user, loading])

  return (
    <section>
        <HomeNav user={user}/>
        <div className='flex flex-col p-5 bg-black rounded-xl m-2'>
            <div className='flex bg-pink-600 p-5'>
                <div className='border border-b block relative rounded-full bg-black'><img className='relative object-none rounded-full' src="/user.png" alt="User Img" /></div>
               <div className='flex flex-col items-center justify-center ml-[3rem]'> <h2 className='text-[5rem] text-white'>{userdata.data?.username}</h2>
               <Link to={'/profile/edit'}><h3 className='bg-gray-500 p-3 text-white' >Edit profile</h3></Link> </div>
            </div>
            <div>
                <h2>Workout Data</h2>
            </div>
            <Friend/>
            
        </div>
        
    </section>
    
  )
}

export default Profile