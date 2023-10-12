import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'

function Directory() {
  const navigate = useNavigate();

  const data = [
    {
      "id": 1,
      "name": "Neetesh Gupta",
      "address": "Ashoknagar",
      "phone": "+91-7000835163",
      "username": "Neetesh",
      "posts": [
        {"id" : 1, "content" : "A Content 1", "url" : "https://picsum.photos/200/300"},
        {"id" : 2, "content" : "A Content 2", "url" : "https://picsum.photos/200/300"},
        {"id" : 3, "content" : "A Content 3", "url" : "https://picsum.photos/200/300"},
        {"id" : 4, "content" : "A Content 4", "url" : "https://picsum.photos/200/300"},
        {"id" : 5, "content" : "A Content 5", "url" : "https://picsum.photos/200/300"}
      ]
    },
    {
      "id": 2,
      "name": "Shri Yadav",
      "address": "Banglore",
      "phone": "+91-9815421421",
      "username": "Shri",
      "posts": [
        {"id" : 1, "content" : "A Content 1", "url" : "https://picsum.photos/200"},
        {"id" : 2, "content" : "A Content 2", "url" : "https://picsum.photos/200"},
        {"id" : 3, "content" : "A Content 3", "url" : "https://picsum.photos/200"},
        {"id" : 4, "content" : "A Content 4", "url" : "https://picsum.photos/200"},
        {"id" : 5, "content" : "A Content 5", "url" : "https://picsum.photos/200"},
        {"id" : 6, "content" : "A Content 6", "url" : "https://picsum.photos/200"},
        {"id" : 7, "content" : "A Content 7", "url" : "https://picsum.photos/200"},
        {"id" : 8, "content" : "A Content 8", "url" : "https://picsum.photos/200"},
        {"id" : 9, "content" : "A Content 9", "url" : "https://picsum.photos/200"},
        {"id" : 10, "content" : "A Content 10", "url" : "https://picsum.photos/200"}
      ]
    },
    {
      "id": 3,
      "name": "Rahul Khanna",
      "address": "Mumbai",
      "phone": "+91-8741216598",
      "username": "Rahul",
      "posts": [
        {"id" : 1, "content" : "A Content 1", "url" : "https://source.unsplash.com/random/200x200?sig=1"},
        {"id" : 2, "content" : "A Content 2", "url" : "https://source.unsplash.com/random/200x200?sig=1"},
        {"id" : 3, "content" : "A Content 3", "url" : "https://source.unsplash.com/random/200x200?sig=1"},
        {"id" : 4, "content" : "A Content 4", "url" : "https://source.unsplash.com/random/200x200?sig=1"},
        {"id" : 5, "content" : "A Content 5", "url" : "https://source.unsplash.com/random/200x200?sig=1"},
        {"id" : 6, "content" : "A Content 6", "url" : "https://source.unsplash.com/random/200x200?sig=1"}
      ]
    },
    {
      "id": 4,
      "name": "Rohit Mishra",
      "address": "Bhopal",
      "phone": "+91-9875110647",
      "username": "Rohit",
      "posts": [
        {"id" : 1, "content" : "A Content 1", "url" : "https://loremflickr.com/320/240"},
        {"id" : 2, "content" : "A Content 2", "url" : "https://loremflickr.com/320/240"},
        {"id" : 3, "content" : "A Content 3", "url" : "https://loremflickr.com/320/240"},
        {"id" : 4, "content" : "A Content 4", "url" : "https://loremflickr.com/320/240"},
        {"id" : 5, "content" : "A Content 5", "url" : "https://loremflickr.com/320/240"},
        {"id" : 6, "content" : "A Content 6", "url" : "https://loremflickr.com/320/240"},
        {"id" : 7, "content" : "A Content 7", "url" : "https://loremflickr.com/320/240"},
        {"id" : 8, "content" : "A Content 8", "url" : "https://loremflickr.com/320/240"}
      ]
    },
    {
      "id": 5,
      "name": "Deepak Sahu",
      "address": "Ujjain",
      "phone": "+91-9874556252",
      "username": "Deepak",
      "posts": [
        {"id" : 1, "content" : "A Content 1", "url" : "https://loremflickr.com/320/240"},
        {"id" : 2, "content" : "A Content 2", "url" : "https://loremflickr.com/320/240"},
        {"id" : 3, "content" : "A Content 3", "url" : "https://loremflickr.com/320/240"},
        {"id" : 4, "content" : "A Content 4", "url" : "https://loremflickr.com/320/240"},
        {"id" : 5, "content" : "A Content 5", "url" : "https://loremflickr.com/320/240"},
        {"id" : 6, "content" : "A Content 6", "url" : "https://loremflickr.com/320/240"},
        {"id" : 7, "content" : "A Content 7", "url" : "https://loremflickr.com/320/240"},
        {"id" : 8, "content" : "A Content 8", "url" : "https://loremflickr.com/320/240"},
        {"id" : 9, "content" : "A Content 9", "url" : "https://loremflickr.com/320/240"}
      ]
    },
    {
      "id": 6,
      "name": "Deepti Vishw",
      "address": "Shimla",
      "phone": "+91-9787254544",
      "username": "Deepti",
      "posts": [
        {"id" : 1, "content" : "A Content 1", "url" : "https://loremflickr.com/320/240"},
        {"id" : 2, "content" : "A Content 2", "url" : "https://loremflickr.com/320/240"},
        {"id" : 3, "content" : "A Content 3", "url" : "https://loremflickr.com/320/240"},
        {"id" : 4, "content" : "A Content 4", "url" : "https://loremflickr.com/320/240"},
        {"id" : 5, "content" : "A Content 5", "url" : "https://loremflickr.com/320/240"},
        {"id" : 6, "content" : "A Content 6", "url" : "https://loremflickr.com/320/240"},
        {"id" : 7, "content" : "A Content 7", "url" : "https://loremflickr.com/320/240"}
      ]
    },
    {
      "id": 7,
      "name": "Shruti Chouhan",
      "address": "Kashmir",
      "phone": "+91-9754627546",
      "username": "Shruti",
      "posts": [
        {"id" : 1, "content" : "A Content 1", "url" : "https://loremflickr.com/320/240"},
        {"id" : 2, "content" : "A Content 2", "url" : "https://loremflickr.com/320/240"},
        {"id" : 3, "content" : "A Content 3", "url" : "https://loremflickr.com/320/240"},
        {"id" : 4, "content" : "A Content 4", "url" : "https://loremflickr.com/320/240"}
      ]
    },
    {
      "id": 8,
      "name": "Kapil Bhati",
      "address": "Kota",
      "phone": "+91-9724254211",
      "username": "Kapil",
      "posts": [
        {"id" : 1, "content" : "A Content 1", "url" : "https://loremflickr.com/320/240"},
        {"id" : 2, "content" : "A Content 2", "url" : "https://loremflickr.com/320/240"}
      ]
    },
    {
      "id": 9,
      "name": "Piyush Sharma",
      "address": "Indore",
      "phone": "+91-8925484132",
      "username": "Piyush",
      "posts": [
        {"id" : 1, "content" : "A Content 1", "url" : "https://loremflickr.com/320/240"}
      ]
    }
  ]
  
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
