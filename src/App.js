import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import SignIn from './Pages/SignIn'
import SignOut from './Pages/SignOut'
import ForgotPassword from './Pages/ForgotPassword'
import Offers from './Pages/Offers'
import Header from './Components/Header'

export default function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignOut' element={<SignOut/>}/>
        <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
        <Route path='/offers' element={<Offers/>}/>
      </Routes>
    </>
  )
}
