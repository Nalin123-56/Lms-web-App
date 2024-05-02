import React from 'react'
import "./announcements.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Announcements = () => {


const slideDetails = [
  {id:1, annousment:" Dear students , Please upload your progress of the software project to the given link(Google Classroom)on or before 08.01.2024 andready for the presentation on 09.01.2024 (8.30 a.m onwards).Thank you."},
  {id:1, annousment:" Dear students , Please upload your progress of the software project to the given link(Google Classroom)on or before 08.01.2024 andready for the presentation on 09.01.2024 (8.30 a.m onwards).Thank you."},
  {id:1, annousment:" Dear students , Please upload your progress of the software project to the given link(Google Classroom)on or before 08.01.2024 andready for the presentation on 09.01.2024 (8.30 a.m onwards).Thank you."},

]


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
    
  };
  return (
    <>
    <span className='page'>Announcements</span>
     <div className='slide_container'>
     <Slider {...settings}>
      {slideDetails.map((item)=> ( 
    <div key={item.id} className='slide'>
       <p>
        {item.annousment}
       </p>
    </div>
    ))}
  </Slider> 
    </div>
    </>
   
    
  )
}

export default Announcements
