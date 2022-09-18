import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink from './CustomLink'


const Layout = () => {
  return (
    <>
    <header className='navbar'>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
        <CustomLink to='/works'>Works</CustomLink>
    </header>
    
    <main>
        <Outlet/>
    </main>

    <footer className='footer'>2022 | RDLF</footer>
    </>
  )
}

export default Layout