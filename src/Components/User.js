import React from 'react'
import { Link, useParams } from 'react-router-dom';
import userData from './userData.json'
import { useState } from 'react';
import PostPopUp from './PostPopUp';

function User() {
    const { id } = useParams();

    const user = userData.find((userData) => userData.id === parseInt(id));

    const [selectedPost, setSelectedPost] = useState(null);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPostDetails = (post) => {
        setSelectedPost(post);
        setIsPopupOpen(true);
      };
    
    const closePostDetails = () => {
      setSelectedPost(null);
      setIsPopupOpen(false);
    };
  
    if (!user) {
      return <div>User data not found.</div>;
    }

    return (
        <div className='details-container'>
            <h2>DETAIL</h2>
            <div className='personal-details'>
                <p>
                    <p>Name : {user.name}</p>
                    <p>Username : {user.username}</p>
                </p>

                <p>
                    <p>Address : {user.address}</p>
                    <p>Phone : {user.phone}</p>
                </p>
            </div>
            <div className='post-container'>
                {user.posts.map((post) => (
                    <div key={post.id} className='post' onClick={() => openPostDetails(post)}>
                        <h3>POST</h3>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
            
            {isPopupOpen && selectedPost && 
                (<PostPopUp post={selectedPost} onClose={closePostDetails} />)
            }
        </div>
    )
}

export default User
