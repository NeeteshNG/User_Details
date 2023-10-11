import React from 'react'
import { Link } from 'react-router-dom'

function Card({data}) {
  return (
    <Link to={`/userdetails/${data.id}`} className='card-container'>
        <div className="card">
            <p>{data.username}</p>
            <p>Post : {data.post}</p>
        </div>
    </Link>
  )
}

export default Card
