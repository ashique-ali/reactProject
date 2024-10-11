import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Header() {
  const {cart} = useSelector((item) => item.cartItem);
  return (
    <div>
      <ul className='d-flex bg-dark text-white gap-4 p-3'>
        <li style={{ listStyle: "none" }}><Link className='text-white text-decoration-none' to="/">EmployeeDetails</Link></li>
        <li style={{ listStyle: "none" }}><Link className='text-white text-decoration-none' to="/productlist">productlist</Link></li>
        <li style={{ listStyle: "none" }}><Link className='text-white text-decoration-none' to="/form">Form</Link></li>
        <li style={{ listStyle: "none" }}><Link className='text-white text-decoration-none' to="/todo">Todo</Link></li>
        <li style={{ listStyle: "none" }}><Link className='text-white text-decoration-none' to="/file">File</Link></li>
        <li style={{ listStyle: "none" }}><Link className='text-white text-decoration-none' to="/liftingState">liftingState</Link></li>
        <li style={{ listStyle: "none" }}><Link className='text-white text-decoration-none' to="/color">Color picker</Link></li>
        <li style={{ listStyle: "none" }}><Link className='text-white text-decoration-none' to="/redux">Redux</Link></li>
        <li style={{ listStyle: "none" }}><Link className='text-white text-decoration-none' to="/pdpList">pdpList</Link></li>
        <li style={{ listStyle: "none" }}><Link className='text-white text-decoration-none' to="/multiselect">MultiSelect</Link></li>
        <div className='position-relative'>
          <FaCartPlus />
          <span className='position-absolute' style={{ top: "2px", lineHeight: "0" }}>{cart.length}</span>
        </div>
      </ul>
    </div>
  )
}

export default Header
