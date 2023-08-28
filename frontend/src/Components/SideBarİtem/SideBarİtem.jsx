import React from 'react'
import './SideBarİtem.css'
import {FaSistrix ,FaUserCircle,FaBell} from "react-icons/fa";
export default function SideBarİtem({text}) {
  return (
    <div className='container'>
        <div className='User'>
        <FaUserCircle className='İconSideBar2'/>
        <h2 className='UserName'>{text}</h2>
        <button className='FollowBtn'>Follow</button>
        </div>
    </div>
  )
}
