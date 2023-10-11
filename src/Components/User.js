import React from 'react'
import { useParams } from 'react-router-dom';
import userData from './userData.json'

function User() {
    const { id } = useParams();

    const user = userData.find((userData) => userData.id === parseInt(id));
  
    if (!user) {
      return <div>User data not found.</div>;
    }

    return (
        <div className='details-container'>
            <h2>DETAIL</h2>
            <div className='personal-details'>
                <p>
                    <p>Name : {user.name}</p>
                    <p>Username : {user.username}</p>
                </p>

                <p>
                    <p>Address : {user.address}</p>
                    <p>Phone : {user.phone}</p>
                </p>
            </div>
        </div>
    )
}

export default User
