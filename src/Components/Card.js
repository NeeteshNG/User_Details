import React from 'react'

function Card({data}) {
  return (
    <div className='card-container'>
        <div class="card">
            <p>{data.username}</p>
            <p>Post : {data.post}</p>
        </div>
    </div>
  )
}

export default Card
