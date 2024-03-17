import React, { useEffect, useRef, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./navbar.css"
import logo from './assets/logo.png';
import {Link} from 'react-router-dom'
import Cart from './Cart';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);

  useEffect(() => {
    
    const handleOutsideClick = (e) => {
      console.log(e.target.className);
      if (!refOne.current.contains(e.target) || e.target.className.includes('cart_cross')) {
        setOpen(false);
      }
      
    };
  
    document.addEventListener('mousedown', handleOutsideClick);
  
    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  },[]);
  

  return (
    <>
      <div className='main'>
        <div className='main2'>
          <ul className='categories'>
            <li className='list'>
              <div className='left'>
                <p className='cattext'>Categories</p>
                <IoMdArrowDropdown className='drop' />
              </div>
              <ul className='dropdown'>
                <li className='item1'>
                  <Link to="/products/1">Men</Link>
                </li>
                <li className='item1'>
                  <Link to="#">Women</Link>
                </li>
                <li className='item1'>
                  <Link to="#">Assesories</Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className='center'>
            <img className='logo' src={logo} alt="Logo" />
            <h1 className='website_name'>BROWSEBAZAAR</h1>
          </div>
          <div className='icons'>
            <IoMdSearch className='search' />
            <div className='cart_div'>
              <MdOutlineShoppingCart className='cart' onClick={() => setOpen(!open)} />
              <span className='cart_span'>0</span>
            </div>
          </div>
        </div>
      </div>
      <div ref={refOne}>{open && <Cart />}</div>
    </>
  );
};

export default Navbar;
