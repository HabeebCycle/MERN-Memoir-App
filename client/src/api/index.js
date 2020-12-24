import axios from "axios";

// Local build
//const url = "http://localhost:5000/posts";

// Docker build
const url = "http://api-server:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.put(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/like-post`);
