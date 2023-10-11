import React from 'react';

function PostPopUp({ post, onClose }) {
  return (
    <div className="post-details-popup">
      <div className="post-details">
        <h3>Post Details</h3>
        <img src={post.url}/>
        <p>{post.content}</p>
        <button className="buttons" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PostPopUp;