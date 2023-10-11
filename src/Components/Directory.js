import React from 'react'
import Card from './Card'

function Directory() {
  const data = [
    {id : 1, name : "Neetesh Gupta", address : "Ashoknagar", phone : "+91-7000835163", username : "Neetesh", post : 15},
    {id : 2, name : "Shri Yadav", address : "Banglore", phone : "+91-9815421421", username : "Shri", post : 21},
    {id : 3, name : "Rahul Khanna", address : "Mumbai", phone : "+91-8741216598", username : "Rahul", post : 35},
    {id : 4, name : "Rohit Mishra", address : "Bhopal", phone : "+91-9875110647", username : "Rohit", post : 56},
    {id : 5, name : "Deepak Sahu", address : "Ujjain", phone : "+91-9874556252", username : "Deepak", post : 77},
    {id : 6, name : "Deepti Vishw", address : "Shimla", phone : "+91-9787254544", username : "Deepti", post : 88},
    {id : 7, name : "Shruti Chouhan", address : "Kashmir", phone : "+91-9754627546", username : "Shruti", post : 4},
    {id : 8, name : "Kapil Bhati", address : "Kota", phone : "+91-9724254211", username : "Kapil", post : 46},
    {id : 9, name : "Piyush Sharma", address : "Indore", phone : "+91-8762164213", username : "Piyush", post : 100},
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
