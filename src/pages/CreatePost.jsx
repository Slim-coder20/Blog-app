import React from "react";
import styles from "../styles/CreatePostContainer.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { useNavigate } from 'react-router-dom'; 
import "../App.css";

const CreatePost = () => {
  const { addPost } = useContext(PostContext);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Title is required")
      .min(3, "Title must be at least 3 characters long"),
    author: yup
      .string()
      .required("Author is required")
      .min(3, "Author must be at least 3 characters long"),
    content: yup
      .string()
      .required("Content is required")
      .min(10, "Content must be at least 10 characters long"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    addPost(data);
    reset();
    navigate("/");
  }

  return (
    <div className={styles.createPostContainer}>
      <h1 className={styles.createPostTitle}>Create Post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.createPostForm}>
        <div className={styles.createPostFormItem}>
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="Title" {...register("title")} />
        </div>
        {errors.title && <p className={styles.error}>{errors.title.message}</p>}
        <div className={styles.createPostFormItem}>
          <label htmlFor="author">Author</label>
          <input type="text" placeholder="Author" {...register("author")} />
        </div>
        {errors.author && (
          <p className={styles.error}>{errors.author.message}</p>
        )}
        <div className={styles.createPostFormItem}>
          <label htmlFor="content">Content</label>
          <textarea
            type="text"
            placeholder="Content"
            {...register("content")}
          />
        </div>
        {errors.content && (
          <p className={styles.error}>{errors.content.message}</p>
        )}
        <button type="submit" className={styles.createPostFormButton}>
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
