import React from 'react';
import { MenuLink,Menu,Hamburger } from './NavElement';
export default function Navbar(){
  return( 
    <nav>
    <Hamburger/>
      <img src= {require('./logo-png.png')} alt='KYS' className = "Nav-logo"></img>
      <Menu>
        <MenuLink to="/books" activestyle = 'true'>Books</MenuLink>
        
        <MenuLink to="login" activestyle = 'true'>Login</MenuLink>
      </Menu>
    </nav>
  )
}