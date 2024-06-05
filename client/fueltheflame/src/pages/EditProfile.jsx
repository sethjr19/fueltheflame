import React, { useContext, useState, useEffect } from 'react'
import { userContext } from '../components/UserContext'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const EditProfile = () => {
    const {user, loading} = useContext(userContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleUpdate =  async(e) => {
        e.preventDefault();
        try{
        const response = await axios.post('http://localhost:3000/profile/edit/update ', {email,username});
        navigate('/profile')
        console.log(response)
        } catch(e) {
          alert('Update failed:')
          console.error(e)
        }
      }

      if (loading) {
        return (<div>
          <h1>Loading...</h1>
        </div>)
      } 

      if(!user) {
        return <div>User not found</div>
      } 

  return (
    <div>
        <div>
            {user.username}
        </div>
        <form onSubmit={handleUpdate}>
           <div className='w-[30rem]'>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text"
                autoComplete="username"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder={user.data.email}
              />
            </div>
            <div className='w-[30rem]'>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    type="text"
                    autoComplete="username"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder={user.data.username}
                />
            </div> 
            <button type='submit'>Save</button>
        </form>
        
    </div>
  )
}

export default EditProfile