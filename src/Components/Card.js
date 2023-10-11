import React from 'react'
import { Link } from 'react-router-dom'

function Card({data, numPosts}) {
  return (
    <div>
      <Link to={`/userdetails/${data.id}`} className='card-container'>
        <div className="card">
            <p>{data.username}</p>
            <p>Post : {numPosts}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card
