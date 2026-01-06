import React from "react";
import "../App.css";
import { PostContext } from "../context/PostContext";
import { useContext } from "react";
import { Post } from "../components/Post";
const Home = () => {
  const { posts } = useContext(PostContext);

  return (
    <div className="container">
      <ul className="post-list">
        {posts.map((post, key) => (
          <Post key={key} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
