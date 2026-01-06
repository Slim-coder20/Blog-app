import React from 'react'

export const Post = (props) => {  
  return (
    <div className='post'>
      <h3>{props.post.title}</h3>
      <p>{props.post.content}</p>
      <p>Author: {props.post.author}</p>
      <p>Date: {props.post.date}</p>
      <button className='edit-btn'>Edit</button>
      <button className='delete-btn'>Delete</button>
    </div>
  );
};
