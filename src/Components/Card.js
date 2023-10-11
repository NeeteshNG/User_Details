import React from 'react'
import { Link } from 'react-router-dom'

function Card({data, numPosts, onCardClick}) {
  return (
    <div>
      <Link to={`/userdetails/${data.id}`} className='card-container' onClick={onCardClick}>
        <div className="card">
            <p>{data.username}</p>
            <p>Post : {numPosts}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card
