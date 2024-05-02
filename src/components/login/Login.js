import React from 'react'
import "./login.css"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='login_container'>
      <Link to="/loginPopup">
        <div className='log'>Login</div>
      </Link>
      <Link to="/signup">
        <div className='sign'>Sign Up</div>
      </Link>
      
    </div>
  )
}

export default Login
