import React from 'react'
import "./job.css"

const Job = () => {
  const courceDEtails =[
    {id:1, name:"Automation"},
    {id:2, name:"Mechatronic"},
    {id:3, name:"IOT"},
    {id:4, name:"ICT"},
    {id:5, name:"Communication"},
    {id:6, name:"Repairing"},
  ]
  return (
<>
<span className='job_page'>Courses</span>
    <div className='job_container'>
    {courceDEtails.map((item)=>(
    <div key={item.id} className='job_section'>
      <span>{item.name}</span>
    </div>
    ))}
  </div>
</>
    
  )
}

export default Job
