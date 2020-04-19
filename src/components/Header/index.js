import React from 'react'
import './style.css'

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className = "headerMenu">
            <a href="#">Home</a>
            <a href="#">AboutUs</a>
            <a href="#">ContactUs</a>
        </nav>
        <div>
            Social Media Links
        </div>
    </header>
   )

 }

export default Header;

