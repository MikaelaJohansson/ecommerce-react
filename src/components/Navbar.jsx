import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


export default function Navbar() {

  const {user, logout} = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/auth");
  }

  return (
    <nav className='navbar'>
      <div className='navbar-container'>

        <Link to="/" className='navbar-brand' >ShopHub</Link>

        <div className='navbar-link'> 
          <Link to="/">Home</Link>
          <Link to="/checkout">Cart</Link>
        </div>

        <div className='navbar-auth'>

          { !user ? <div className='navbar-auth-link'>
            <Link to="/auth">Login</Link>
            <Link to="/auth">Signup</Link>
          </div> : (
            <div>
              <span>Hello, {user.email} </span>
              <button onClick={handleLogout}>Logout</button> 
            </div>
          )}

        </div>

      </div>
    </nav>
  )
}
