import React, { useEffect, useState,useContext } from 'react'
import { userContext } from '../components/UserContext'
import axios from 'axios';
import PendingFriends from './PendingFriends'
import RequestedFriends from './RequestedFriends'

const Friend = () => {
    const [users, setUsers] = useState([])
    const {user, loading} = useContext(userContext);

    async function getUsers() {
        if (loading || !user) {
            console.log('User context not ready');
            return;
        }
      
    try {
       const getusers = await axios.get(`/users?userId=${user.data._id}`)
        setUsers(getusers.data)
        console.log('Users', users)
        } catch (err) {
            console.error('Error fetching users', err)
        }
    }

    useEffect(() => {
        getUsers();
      }, [loading, user]);

    async function addFriend(friend) {
        if (loading || !user) {
            console.log('User context not ready');
            return;
        }   

        try {
            const addfriend = await axios.post('/addfriend', {
            user: user.data._id, friend: friend._id
        })


        }  catch (err) {
            console.error(err)
        }
    }

  return (
    <>
    <div  className='bg-white'>
        <div>List of Users</div>
        <button onClick={getUsers}>Get Users</button> 
        <div>
        <ul>
          {users.map((friend,index) => (
            <div className='flex' key={index}>
                <li className='mr-5'>{friend.username}</li>
                {friend.friends > 0 ? <h1>{friend.friends}</h1> : <h1>Not a friend</h1>}
                <button onClick={() => addFriend(friend)} className='mx-5 bg-green-500 p-3 rounded-full text-[10px]'>Add friend</button>
            </div>
        ))}  
        </ul>
        </div>

        <div>
            <h2>Requested</h2>
        </div>

        <div>
            <PendingFriends/>
        </div>

        <div>
            <RequestedFriends/>
        </div>

        <div>
            <h2>Added</h2>
        </div>
        
    </div>


 
    </>
    

  )
}

export default Friend