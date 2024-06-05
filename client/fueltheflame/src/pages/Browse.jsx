import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../components/UserContext'
import HomeNav from '../components/HomeNav'
import axios from 'axios';
import Card from '../components/Card';
import { json } from 'react-router-dom';


const Browse = () => {
  const {user, loading} = useContext(userContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/categories').then(({data}) => {
      setCategories(data)
      console.log(categories)
    })
  }, [])
  
  if (loading) {
    return (<div>
      <h1>Loading...</h1>
    </div>)
  } 

  if(!user) {
    return <div>User not found</div>
  } 

  return (
    <>
    <section>
    <HomeNav user={user}/>
    <div className='lg:mx-[10rem] mx-[3rem] my-[2rem]'>
      <div className='flex'>
        <div className='flex justify-center items-center'>
          <h2 className='text-[2rem] font-bold'>Browse</h2>
        <div className="max-w-[30rem] w-[30rem] p-3 mx-[3rem] bg-gray-200 rounded-full">
        <div className="flex items-center">
          <input
            type="text"
            // value={searchTerm}
            // onChange={}
            className="flex-1 appearance-none rounded-none py-2 px-4 bg-transparent border-none text-gray-700 leading-tight focus:outline-none"
            placeholder="Search..."
          />
        </div>
        {/*Add Exercise Btn*/}
      </div>
        </div>
        
    </div>
        <div className='flex flex-wrap justify-center gap-[3rem] mt-[3rem]'>
        {categories.length > 0 && categories.map(category => 
        (
          <div>
            <Card name={category.name} image={category.imageUrl}/>
          </div>
        )
        )}
      </div>
    </div>
      </section>
    </>
    
  )
}

export default Browse