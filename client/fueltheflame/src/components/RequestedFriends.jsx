import React, { useEffect, useState,useContext } from 'react'
import { userContext } from '../components/UserContext'
import axios from 'axios';

const RequestedFriends = () => {
    const [friendRequest, setfriendRequests] = useState([]);
  const {user, ready} = useContext(userContext);

  const fetchFriendRequests = async() => {
    try {
        const response = await axios.get(`/friendrequests?userId=${user._id}`)
        // setPendingFriends(response[0].receiverInfo.username);
        console.log(response.data)
        setfriendRequests(response.data)
    } catch (err) {
        console.error(err)
    }
}

  return (
    <>
        <div>RequestedFriends</div>
        <button onClick={fetchFriendRequests} className='bg-green p-3'>+</button>
    </>
    
  )
}

export default RequestedFriends