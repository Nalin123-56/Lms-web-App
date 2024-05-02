import React from 'react'
import "./loginPopUp.css"
import { Link } from 'react-router-dom'

const LoginPopUp = () => {
  return (
    <div className='log_in_container'> 
    <div className='log_in_parent'>
        <form>
           
            <div className='log_in_name_parent'>
               <div className='log_in_label'>Email</div>
               <input className='log_in_input' type='text' placeholder='enter email address'/> 
            </div>
            
            <div className='log_in_name_parent'>
               <div className='log_in_label'>password</div>
               <input className='log_in_input' type='password' placeholder='enter your password'/> 
            </div>

        </form>
        <div className='log_in_button'>
            <dutton className='log_button'>LOG IN</dutton>
        </div>
        <div className='not_acc'>
        <span className='have'>Don't have an account ?</span>
        <Link to="/signup">
          <span className='sign_in'>Sign Up</span>
        </Link>
        
        </div>

    </div>
     
    </div>
  )
}

export default LoginPopUp
