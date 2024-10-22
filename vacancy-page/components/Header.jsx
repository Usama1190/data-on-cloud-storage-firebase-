import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='logo-wrapper'>
            <strong><a href="/" className='logo'>GTV - Global Tech Vacancy</a></strong>
        </div>
        <div className='header-items-wrapper'>
            <ul className='header-items'> 
                <li><a href="/" className='item'>Home</a></li>
                <li><a href="/" className='item'>Services</a></li>
                <li><a href="/" className='item active-item'>Vacancies</a></li>
                <li><a href="/" className='item'>About</a></li>
                <li><a href="/" className='item'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header
