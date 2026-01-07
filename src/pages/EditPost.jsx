import React from "react";
import "../App.css";
import styles from "../styles/EditPostContainer.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { posts, updatePost } = useContext(PostContext);
  const post = posts.find((post) => post.id === parseInt(id));

  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    author: yup.string().required("Author is required"),
    content: yup.string().required("Content is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: post
      ? {
          title: post.title,
          author: post.author,
          content: post.content,
        }
      : {},
  });

  function onSubmit(data) {
    updatePost(parseInt(id), { ...data, id: parseInt(id), date: post.date });
    reset();
    navigate("/");
  }
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div className={styles.createPostContainer}>
      <h1 className={styles.createPostTitle}>Edit Post</h1>
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

export default EditPost;
