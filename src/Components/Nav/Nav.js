import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
const Nav = ()=>{
    return (
      <div className='nav-container'>
        <div className='left-nav'>Cristian</div>
        <div className='right-nav'>
          <Link to='/projects'> <div>Projects</div></Link>
          <Link to='/about'>
          <div>About</div></Link>
          <Link to='/contact'>
          <div>Contact</div></Link>
        </div>
      </div>
    );
}

export default Nav