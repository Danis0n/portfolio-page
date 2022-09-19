import React from 'react'
import CustomLink from './CustomLink'

const Navbar = () => {
  return (
    <header className='navbar'>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='works'>Works</CustomLink>
        <CustomLink to='radafil'>RDFL</CustomLink>
    </header>
    
  )
}

export default Navbar