import React from 'react'
import './Nav.css'
const Nav = ()=>{
    return (
      <div className='nav-container'>
        <div className='left-nav'>Cristian</div>
        <div className='right-nav'>
          <div>Projects</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
    );
}

export default Nav