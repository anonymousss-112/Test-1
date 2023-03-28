import React from 'react'
import '../form.css'

function Form() {
  return (
    <>
        <div className="container">
        <div className="edit-profile">
            <h2 id="heading">Edit Profile</h2>
            <img
            id="profile-img"
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyc3xlbnwwfDF8MHx8&w=1000&q=80"
            />
        </div>
        <div className="form">
            <form action="index.php">
            <div className="nameSec section">
                <div className="fname">
                <label htmlFor="firstname">First Name</label>
                <input className="Name" type="text" id="firstname" />
                </div>
                <div className="lname">
                <label htmlFor="lastname">Last Name</label>
                <input className="Name" type="text" id="lastname" />
                </div>
            </div>
            <div className="otherSec section">
                <label htmlFor="email">Email</label>
                <input className="fields" type="email" id="email" />
                <label htmlFor="contact">Mobile Number</label>
                <input className="fields" type="contact" id="contact" />
                <label htmlFor="firstname">First Name</label>
                <input className="fields" type="text" id="firstname" />
                <label htmlFor="password">Password</label>
                <input className="fields" type="password" id="password" />
            </div>
            <div className="date section">
                <div className="sdate">
                <label htmlFor="startdate">College Start date</label>
                <input className="Cdate" type="datetime" id="startdate" />
                </div>
                <div className="edate">
                <label htmlFor="enddate">College End date</label>
                <input className="Cdate" type="datetime" id="enddate" />
                </div>
            </div>
            </form>
        </div>
        <div className="btns">
            <div className="button">
            <button id="cancelBtn" className="btn">
                Cancel
            </button>
            </div>
            <div className="button">
            <button id="submitBtn" className="btn">
                Save
            </button>
            </div>
        </div>
</div>

    </>
  )
}

export default Form