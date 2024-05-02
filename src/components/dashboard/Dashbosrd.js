import React from 'react'
import "./dashboard.css"
import logo from "../../../src/images/logo.png"
import Login from "../../components/login/Login"
const Dashbosrd = () => {
  return (
    <>
    <Login/>
      <div className='dashboard_container'>
      <div className='logi_section'>
      <img className='logo' src={logo} alt=''/>
      </div>
      <div className='department_name'>
       <span className='department'>
      DEPARTMENT OF ELECTRONIC
      </span> 
      </div>
    </div>
    </>
  
  )
}

export default Dashbosrd
