import { createContext } from "react";
import { useState, useEffect } from "react";
export const PostContext = createContext({
  posts: [],
  setPosts: () => {},
  addPost: () => {},
  findPostById: () => {},
  updatePost: () => {},
});

function PostProvider(props) {
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      return JSON.parse(storedPosts);
    } else {
      return [
        //Post 1 //
        {
          id: 1,
          title: "Hello Wordl",
          content: "welcome to my new blog",
          author: "John Doe",
          date: new Date().toLocaleDateString(),
        },
        // Post 2 //
        {
          id: 2,
          title: "My First Post",
          content:
            "This is my first post on my blog. I'm excited to share my thoughts and ideas with you.",
          author: "John Doe",
          date: new Date().toLocaleDateString(),
        },
        // Post 3 //
        {
          id: 3,
          title: "My Second Post",
          content:
            "This is my second post on my blog. I'm excited to share my thoughts and ideas with you.",
          author: "John Doe",
          date: new Date().toLocaleDateString(),
        },
        // Post 4 //
        {
          id: 4,
          title: "My Third Post",
          content:
            "This is my third post on my blog. I'm excited to share my thoughts and ideas with you.",
          author: "John Doe",
          date: new Date().toLocaleDateString(),
        },
      ];
    }
  });

  /**
   * UseEffect qui sauvegarde automatiquement
   * dans localStorage à chaque modification de posts
   *  */

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  // Add a new Post //
  function addPost(newPost) {
    setPosts((prev) => {
      const lastId = prev.length > 0 ? prev[prev.length - 1].id : 0;
      return [
        ...prev,
        { ...newPost, id: lastId + 1, date: new Date().toLocaleDateString() },
      ];
    });
  }
  // Update a Post //
  function findPostById(id) {
    return posts.find((post) => post.id === id);
  }
  function updatePost(updatedPost) {
    setPosts((prev) =>
      prev.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  }

  return (
    <PostContext.Provider
      value={{ posts, setPosts, addPost, findPostById, updatePost }}
    >
      {props.children}
    </PostContext.Provider>
  );
}

export default PostProvider;
