import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'

function Directory({data}) {
  const navigate = useNavigate();

  const openUserDetails = (id) => {
    navigate(`/userdetails/${id}`)
  }

  return (
    <div>
      {data.map(user => 
        <Card 
          key={user.id} 
          data={user} 
          numPosts={user.posts.length} 
          onCardClick={() => openUserDetails(user.id)}/>
      )}
    </div>
  )     
}

export default Directory
