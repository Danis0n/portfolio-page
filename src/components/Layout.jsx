import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink from './CustomLink'
import Footer from './Footer'


const Layout = () => {
  return (
    <>
    <header className='navbar'>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/works'>Works</CustomLink>
        <CustomLink to='/radafil'>RDFL</CustomLink>
    </header>
    
    <main>
        <Outlet/>
    </main>

    <Footer/>
    </>
  )
}

export default Layout