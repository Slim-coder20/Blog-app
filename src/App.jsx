import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import EditPost from "./pages/EditPost.jsx";
import DeletePost from "./pages/DeletePost.jsx";
import PostProvider from "./context/PostContext.jsx";
function App() {
  return (
    <div>
      <PostProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
          <Route path="/delete-post/:id" element={<DeletePost />} />
        </Routes>
      </PostProvider>
    </div>
  );
}

export default App;
