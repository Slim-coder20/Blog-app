import { createContext } from "react";
import { useState } from "react";
export const PostContext = createContext();

function PostProvider(props) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Hello Wordl",
      content: "welcome to my new blog",
      author: "John Doe",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      title: "My First Post",
      content: "This is my first post on my blog. I'm excited to share my thoughts and ideas with you.",
      author: "John Doe",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 3,
      title: "My Second Post",
      content: "This is my second post on my blog. I'm excited to share my thoughts and ideas with you.",
      author: "John Doe",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 4,
      title: "My Third Post",
      content: "This is my third post on my blog. I'm excited to share my thoughts and ideas with you.",
      author: "John Doe",
      date: new Date().toLocaleDateString(),
    },

  ]);
  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </PostContext.Provider>
  );
}

export default PostProvider;
