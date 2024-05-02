import React, { useState } from "react";
import "./navigationBar.css";
import profile from "../../../src/images/profile.jpg";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const navigation = [
    { name: "Dashboard", icon: "", url: "/dashboard" },
    { name: "Courses", icon: "", url: "/courses" },
    { name: "Announcements", icon: "", url: "/annouscements" },
    { name: "Association", icon: "", url: "/association" },
    { name: "Jobs", icon: "", url: "/jobs" },
  ];

  // State to manage the visibility of userDetails
  const [open, setOpen] = useState(false);


  const userDetails = [
    {id:1 , name:'Name : ',topic:'Darshana Lakshan',},
    {id:1 , name:'Index No : ',topic:'UCA/ETN/F/2020/03'},
    {id:1 , name:'Department : ',topic:'Electronic Engineering technology',},
    {id:1 , name:'Address : ',topic:'12/2, udawattha, egodamulla, ankumbura',},
    {id:1 , name:'Phone Number : ',topic:'+94768844550',},
  ];
  return (
    <div>
      <div className="navigation_container">
        <div className="profile_container" onClick={() => setOpen(!open)}>
          <div className="image">
            <img className="image_pro" src={profile} alt="" />
          </div>
          <div className="name_section">
            <div className="name">Darshana Lakshan</div>
            <div className="position">Student</div>
          </div>
        </div>
        {/* Toggle userDetails based on the state of 'open' */}
        {open && (

          <div  className="user_details_container">
            <div className="close" onClick={() => setOpen(false)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.17011 15.58C8.98011 15.58 8.79011 15.51 8.64011 15.36C8.35011 15.07 8.35011 14.59 8.64011 14.3L14.3001 8.63999C14.5901 8.34999 15.0701 8.34999 15.3601 8.63999C15.6501 8.92999 15.6501 9.40998 15.3601 9.69998L9.70011 15.36C9.56011 15.51 9.36011 15.58 9.17011 15.58Z"
                  fill="#292D32"
                />
                <path
                  d="M14.8301 15.58C14.6401 15.58 14.4501 15.51 14.3001 15.36L8.64011 9.69998C8.35011 9.40998 8.35011 8.92999 8.64011 8.63999C8.93011 8.34999 9.41011 8.34999 9.70011 8.63999L15.3601 14.3C15.6501 14.59 15.6501 15.07 15.3601 15.36C15.2101 15.51 15.0201 15.58 14.8301 15.58Z"
                  fill="#292D32"
                />
                <path
                  d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                  fill="#292D32"
                />
              </svg>


            </div>
            {userDetails.map((item)=> (  
            <div className="continer">
              <span className="topic">{item.name}</span>
              <span className="reply">{item.topic}</span>
            </div>
               ))}
          </div>
          
        )}

        <div className="page_section">
          <ul className="page_ul">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link to={item.url}>
                  <div className="page_section">
                    <div className="page_name">{item.name}</div>
                    <div className="page_icon">{item.icon}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
