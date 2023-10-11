import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
        <ul class="nav-links">
            <NavLink to='/'><li><a href="#">Home</a></li></NavLink>
            <NavLink to='/directory'><li class="center"><a href="#">Directory</a></li></NavLink>
        </ul>
    </>
  )
}

export default Header
