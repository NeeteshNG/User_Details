import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PostPopUp from './PostPopUp';

function User() {
    const navigate = useNavigate()
    const location = useLocation()
    const user = location.state;

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

    const handleCloseDetails = () => {
        navigate('/directory')
    }
  
    if (!user) {
      return <div>User data not found.</div>;
    }

    return (
        <div className='details-container'>
            <button className='buttons' onClick={handleCloseDetails}>X</button>
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
