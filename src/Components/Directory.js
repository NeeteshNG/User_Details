import React from 'react'
import Card from './Card'

function Directory() {
  const data = [
    {id : 1, username : "Neetesh", post : 15},
    {id : 2, username : "Shri", post : 21},
    {id : 3, username : "Rahul", post : 35},
  ]

  return (
    <div>
      {data.map(user => 
        <Card key={user.id} data={user}/>
      )}
    </div>
  )     
}

export default Directory
