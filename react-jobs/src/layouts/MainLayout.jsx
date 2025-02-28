import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

//main layout inherited by every page or route in the app

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default MainLayout