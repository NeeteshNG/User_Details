import React from 'react'
import Post from './Post'

function UserDetails() {
  return (
    <div className='details-container'>
        <h2>DETAIL</h2>
        <div className='personal-details'>
            <p>
                <p>Name : Neetesh Gupta</p>
                <p>Username : Neetesh</p>
            </p>

            <p>
                <p>Address : Bholaram Ustad Marg, Indore</p>
                <p>Phone : +91-7000835163</p>
            </p>
        </div>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default UserDetails
