import React from 'react'
import "./signUp.css"
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='sign_up_container'> 
    <div className='sign_up_parent'>
        <form>
            <div className='name_parent'>
               <div className='label'>Name</div>
               <input className='input' type='text' placeholder='enter your name'/> 
            </div>

            <div className='name_parent'>
               <div className='label'>Email</div>
               <input className='input' type='text' placeholder='enter email address'/> 
            </div>
            
            <div className='name_parent'>
               <div className='label'>password</div>
               <input className='input' type='password' placeholder='enter your password'/> 
            </div>

            <div className='name_parent'>
               <div className='label'>Re-type password</div>
               <input className='input' type='password' placeholder='enter your password'/> 
            </div>

            <div className='name_parent'>
               <div className='label'>Index Number</div>
               <input className='input' type='text' placeholder='enter your index number'/> 
            </div>
        </form>
        <div className='sign_up_button'>
            <dutton className='sign_button'>SIGN UP</dutton>
        </div>
        <div className='have_acc'>
        <span className='alredy'>Already have account ?</span>
        <Link to="/loginPopup">
         <span className='log_in'>Log In</span>
        </Link>
        
        </div>

    </div>
     
    </div>
  )
}

export default SignUp
