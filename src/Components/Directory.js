import React from 'react'
import Card from './Card'
import userData from './userData.json'

function Directory() {
  return (
    <div>
      {userData.map(user => 
        <Card key={user.id} data={user}/>
      )}
    </div>
  )     
}

export default Directory
