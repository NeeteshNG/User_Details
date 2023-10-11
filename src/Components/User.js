import React from 'react'

function User({data}) {
    return (
        <div className='details-container'>
            <h2>DETAIL</h2>
            <div className='personal-details'>
                <p>
                    <p>Name : </p>
                    <p>Username : </p>
                </p>

                <p>
                    <p>Address : </p>
                    <p>Phone : </p>
                </p>
            </div>
        </div>
    )
}

export default User
