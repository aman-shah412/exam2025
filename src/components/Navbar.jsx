import React from 'react'
import "../appCSS/navbar.css"
import { FaAngleDown } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <img src="modified_logo_white_text_transparent.png" alt="" />
      <div className='menu-dropdown'>
        <FaAngleDown size={25}/>
      </div>
    </nav>
  )
}

export default Navbar
