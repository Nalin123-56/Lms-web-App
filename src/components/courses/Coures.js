import React from 'react'
import "./courses.css"
const Coures = () => {

  const fundermentals =[
      {id:1, subject:"Occupational safety and Health"},
      {id:2, subject:"Basic electronic practices"},
      {id:3, subject:"Basic electrical practices"},
      {id:4, subject:"industrial electronic craftman"},
      {id:5, subject:"Basic Engineering drowing"},
      {id:6, subject:"Physics 1"},
      {id:7, subject:"physics 2"},
  
    ];
  const semestaer_6_1 =[
      {id:1, subject:"D32T001M01-Basic module in principles of electrical engineering 1"},
      {id:2, subject:"D32T001MO3-Engineering mathametics"},
      {id:3, subject:" D32T001M04-Electronics 1 "},
      {id:4, subject:" D32T001M05-ICT for electronic technology "},
      {id:5, subject:" D32T001M06-Occupational  health and safety procedures and practices "},
      {id:6, subject:" D32T001M11-Troubleshooting techniques"},
      {id:7, subject:" English"},
      {id:8, subject:" ICT"},
      {id:9, subject:" EMTM01-Workplace information management"},
      {id:10, subject:" ETNPM01-Electronic project"},
  
    ];
  const semestaer_6_2 =[
      {id:1, subject:"D32T001MO2-Basic module in principles"},
      {id:2, subject:"D32T001M07-Electronics 2"},
      {id:3, subject:" D32T001M08-Industrial electrical,electronic instrumentations "},
      {id:4, subject:" D32T001M09-Communication systems"},
      {id:5, subject:" D32T001M10-Data communication computer networking  systems 1"},
      {id:6, subject:" D32T001M12-Introduction to industrial Automation"},
      {id:7, subject:" D32T001M13-Industrial Electronics 1"},
      {id:8, subject:" English"},
      {id:9, subject:" ICT"},
      {id:10, subject:" EMTM02-Workplace communication management"},
      {id:11, subject:"EMTM03-Planning and scheduling work at workplace"},
      {id:12, subject:" ETNPM01-Electronic Group *project/Resarch(semester 1 and 2)"},
  
    ];
  const semestaer_6_3 =[
      {id:1, subject:"D32T001M14-Electronic power control systems"},
      {id:2, subject:"D32T001M15-Data communication and computer networking  systems 2"},
      {id:3, subject:" D32T001M16-industrial electronics 2"},
      {id:4, subject:"D32T001M17-Microprocessor based systems "},
      {id:5, subject:"D32T001M18-Analog broadcasting "},
      {id:6, subject:" D32T001M19-Advanced computer programming for industrial systems operations"},
      {id:7, subject:"English"},
      {id:8, subject:"EMTM04-problem solving and decision making  "},
      {id:9, subject:"EMTM05-Teamwork and  leadership "},
      {id:10, subject:" ETNPM2-Electronic project/Resarch(semester 3 and 4)"},
    ];
  const semestaer_6_4 =[
      {id:1, subject:"D32T001M20-microprocessor  and microcontroller in industrial  systems"},
      {id:2, subject:"D32T001M21-Control systems"},
      {id:3, subject:" D32T001M22-Digital broadcasting"},
      {id:4, subject:"D32T001M23-intoduction  to mobile technology"},
      {id:5, subject:"D32T001M24-Advanced programable logic controllers use in industrial automation systems "},
      {id:6, subject:"D32T001M25-Digital signal processing"},
    ];

  return (

    <>
     <span className='cource_page'>Courses</span>
    
     <div className='cource_container'>
   
   <div className='fundermentals'>
     <h5 className='sem'>Foundation</h5>
      {fundermentals.map((item)=>(
     <div key={item.id} className='subject'>{item.subject}</div>
      ))}
   </div>

   <div className='fundermentals'>
     <h5 className='sem'>6-1 semester</h5>
      {semestaer_6_1.map((item)=>(
     <div key={item.id} className='subject'>{item.subject}</div>
      ))}
   </div>
   <div className='fundermentals'>
     <h5 className='sem'>6-2 semester</h5>
      {semestaer_6_2.map((item)=>(
     <div key={item.id} className='subject'>{item.subject}</div>
      ))}
   </div>
   <div className='fundermentals'>
     <h5 className='sem'>6-3 semester</h5>
      {semestaer_6_3.map((item)=>(
     <div key={item.id} className='subject'>{item.subject}</div>
      ))}
   </div>
   <div className='fundermentals'>
     <h5 className='sem'>6-4 semester</h5>
      {semestaer_6_4.map((item)=>(
     <div key={item.id} className='subject'>{item.subject}</div>
      ))}
   </div>
</div>
    </>
   
  )
}

export default Coures
