import React from 'react'
import "./association.css"
import asLogo from "../../images/asLogo.jpg"

const Association = () => {
  return (
<>
    <span className='ass_page'>Association</span>
    <div className='asso_cont'>
      
      <div className='as_logo'>
        <img className='asso_logo' src={asLogo} alt=''/>
      </div>
      <div className='as_name'>
       <span className='ass'>
       ASSET
      </span> 
      </div>
    </div>
</>

  )
}

export default Association
