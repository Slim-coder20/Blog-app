import React from "react";
import { PostContext } from "../context/PostContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../styles/EditPostContainer.module.css";
import * as yup from "yup";
import "../App.css";
const EditPost = () => {
  // Initialisation des variables de navigation et du context //
  const navigate = useNavigate();
  const { id } = useParams();
  const { findPostById, updatePost, deletePost } = useContext(PostContext);
  const post = findPostById(Number(id));

  // Utilisation de useEffect pour réinitialiser le formulaire avec les données du post si il existe //
  useEffect(() => {
    if (post) {
      reset({
        title: post.title,
        author: post.author,
        content: post.content,
        date: post.date,
      });
    }
  }, [post]);

  // Définition du schéma de validation AVANT son utilisation
  const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    author: yup.string().required("Author is required"),
    content: yup.string().required("Content is required"),
  });
  // Initialisation du formulaire avec useForm et yupResolver pour la validation des données //
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Fonction pour mettre à jour le post //
  function onSubmit(data) {
    updatePost({
      ...data,
      id: Number(id),
      date: post.date, // Préserver la date originale
    });

    navigate("/");
  }

  if (!post) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Post not found</h1>
        <p>The post you are looking for does not exist.</p>
        <button onClick={() => navigate("/")} className={styles.goToHomeButton}>
          Go to Home
        </button>
      </div>
    );
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
          Update Post
        </button>
        <button onClick={() => deletePost(Number(id))} className={styles.deletePostButton}>
          Delete Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
