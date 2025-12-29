import React, { useState } from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import Sidebar from '../../components/hotelOwner/Sidebar'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer'

const Layout = () => {

  return (
    <div className='flex flex-col h-screen mb-50'>
        <Navbar/>
        <div className='flex h-full'>
            <Sidebar/>
            <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Layout