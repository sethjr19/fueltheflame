import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { userContext } from '../components/UserContext'

const PendingFriends = () => {
  const [pendingFriends, setPendingFriends] = useState([]);
  const {user, loading} = useContext(userContext);

    const fetchPendingFriends = async() => {

      if (loading || !user) {
        console.log('User context not ready');
        return;
    }

        try {
            const response = await axios.get(`/pending-friends?userId=${user.data._id}`)
            // setPendingFriends(response[0].receiverInfo.username);
            console.log(response)
            setPendingFriends(response.data)
        } catch (err) {
            console.error(err)
        }
        console.log('pending friends:', pendingFriends)
    }

  return (
    <>
        <div>PendingFriends</div>
        <button onClick={fetchPendingFriends} className='bg-green p-3'>+</button>
        <ul>
          {pendingFriends.map((friend, index) => (
            <li key={index}>
              <p>Username: {friend.receiverInfo.username}</p>
            </li>
          ))}
        </ul>
    </>
  )
}

export default PendingFriends