import React from 'react';
import './css/navbar.css'

export default function Navbar() {
  return (
    <div className = "navbar">
        <div className = "mx-auto">
        <a href="#" className = 'nav-item'>Home</a>
        <a href="#" className = 'nav-item ml-5'>Gallery</a>
        <a href="#" className = 'nav-item ml-5'>Games</a>
        <a href="#" className = 'nav-item ml-5'>About</a>
        <a href="#" className = 'nav-item ml-5'>Register</a>
        <a href="#" className = 'nav-item ml-5'>Login</a>
          <input type='text' placeholder="You Can't Run" className='search-input ml-5 has-radius'></input>
          <button className='btn-navbar ml-1 has-radius'>Search</button>
        </div>
    </div>
            
        )
    }