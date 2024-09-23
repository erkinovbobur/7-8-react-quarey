import { SlBasket } from "react-icons/sl"; 
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
  <>
<div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg rounded-lg">
  <ul className="flex items-center justify-between space-x-8">
    <li className="hover:scale-110 transform transition duration-300">
      <Link to="/" className="text-white text-lg font-semibold hover:text-yellow-400 transition-colors duration-300">
        Products
      </Link>
    </li>
    <li className="hover:scale-110 transform transition duration-300">
      <Link to="/login" className="text-white text-lg font-semibold hover:text-yellow-400 transition-colors duration-300">
        Login
      </Link>
    </li>
    <li className="hover:scale-110 transform transition duration-300">
      <Link to="/cart" className="text-white text-lg font-semibold flex items-center space-x-2">
        <SlBasket className="text-2xl hover:text-yellow-400 transition-colors duration-300" />
        <span>Cart</span>
      </Link>
    </li>
  </ul>
</div>


  </>
  )
}

export default Nav