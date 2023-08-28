import React from 'react'
import './SideBar.css'
import {FaSistrix ,FaUserCircle,FaBell} from "react-icons/fa";
import SideBarİtem from '../SideBarİtem/SideBarİtem';

export default function SideBar() {
  return (
    <div className='Container'>
        <div className='SideBarRow'>
        <input type="text" placeholder='Search' className='Searchİnput' />
       <button className='İconBtn'>
       <FaSistrix className='İconSideBar'/>
       </button> 
       <button className='İconBtn'>
       <FaBell className='İconSideBar' />
       </button>
        <button className='İconBtn'>
        <FaUserCircle className='İconSideBar'/>
        </button>
        
        
        </div>
        <div className='SideBarTextRow'>
            <h5 className='Text1'>People to follow</h5>
            <a href='/' className='Text2'>See all</a>
        </div>
        <div className='SideBarİtem'>
            <SideBarİtem text='Kerem Bozmaz'/>
            <SideBarİtem text='Batuhan Tanır'/>
            
        </div>
    </div>
  )
}
