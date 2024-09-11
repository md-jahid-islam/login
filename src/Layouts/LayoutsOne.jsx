import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const LayoutsOne = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    
    </>
  )
}

export default LayoutsOne