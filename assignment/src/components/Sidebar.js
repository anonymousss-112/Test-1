import React from 'react'
import '../App.css'

export default function sidebar() {
  return (
    <div className='sideBar'>
      <li className='r1'>
         <img className='icons' src="https://cdn-icons-png.flaticon.com/128/271/271220.png" alt="home" id='setting'/>
        <h4>Settings</h4>
      </li>
    <ul className='el1'>
      
      <li className='r1'>
         <img className='icons'  src="https://cdn-icons-png.flaticon.com/128/650/650143.png" alt="home" id="img1"/>
        <a href="#"><h4 id='title1'>Edit Profile</h4></a>
      </li>
      <li className='r1'>
         <img className='icons' src="https://cdn-icons-png.flaticon.com/128/3602/3602145.png" alt="home" id="img2"/>
        <a href="#"><h4 id='title2'>Notification</h4></a>
      </li>
      <li className='r1'>
         <img className='icons' src="https://cdn-icons-png.flaticon.com/512/2889/2889676.png" alt="home" id="img3"/>
        <a href="#"><h4 id='title3'>Security</h4></a>
      </li>
      <li className='r1'>
         <img className='icons' src="https://cdn-icons-png.flaticon.com/128/2099/2099058.png" alt="home" id="img4"/>
        <a href="#"><h4 id='title4'>Appearance</h4></a>
      </li>
      <li className='r1'>
         <img className='icons' src="https://cdn-icons-png.flaticon.com/128/471/471664.png" alt="home" id="img5"/>
        <a href="#"><h4 id='title5'>Help</h4></a>
      </li>
    </ul>
    </div>
  )
}
