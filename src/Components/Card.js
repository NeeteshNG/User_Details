import React from 'react'
import { Link } from 'react-router-dom'

function Card({data, numPosts}) {
  return (
    <Link to={`/userdetails/${data.id}`} className='card-container'>
        <div className="card">
            <p>{data.username}</p>
            <p>Post : {numPosts}</p>
        </div>
    </Link>
  )
}

export default Card
