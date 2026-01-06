import React from "react";
import { useNavigate } from "react-router-dom";

export const Post = (props) => {
  const { id, title, content, author, date } = props.post;
  const navigate = useNavigate();

  function handleDelete() {
    navigate(`/delete-post/${id}`);
  }
  function handleEdit() {
    navigate(`/edit-post/${id}`);
  }

  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{content}</p>
      <p>Author: {author}</p>
      <p>Date: {date}</p>
      <button className="edit-btn" onClick={handleEdit}>
        Edit
      </button>
      <button className="delete-btn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
