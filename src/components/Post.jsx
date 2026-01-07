import React from "react";
import { useNavigate } from "react-router-dom";

export const Post = (props) => {
  const { id, title, content, author, date } = props.post;
  const navigate = useNavigate();

  return (
    // Quand l'utilisateur clique sur le post il est rediréger vers la page d'édition de ce post //
    <div
      className="post"
      onClick={() => navigate(`/edit-post/${id}`)}
      style={{ cursor: "pointer" }}
    >
      <h3>{title}</h3>
      <p>{content}</p>
      <p>Author: {author}</p>
      <p>Date: {date}</p>
    </div>
  );
};
