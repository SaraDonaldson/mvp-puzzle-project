import React from 'react'
import LocalStorage from '../API/LocalStorage';
import { useNavigate } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
    const navigate = useNavigate;
    const userInfo = LocalStorage.getUser();
    const isLoggedIn = LocalStorage.getToken() !== "";
  
  
  
  
    return (
    <div className='nav-bar'>
    {/* {isLoggedIn ? (
    
    :
    
    ) */}
    
    <h1>Puzzles</h1>
    </div>
  )
}

export default NavBar