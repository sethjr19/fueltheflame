import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import axios from 'axios';
import Browse from './pages/Browse'
import { UserContextProvider } from './components/UserContext'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
    <UserContextProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register'element={<Register/>}/>
          <Route path='/browse'element={<Browse/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/profile/edit' element={<EditProfile/>}/>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
