import {
  FETCH_ALL,
  FETCH_POST,
  FETCH_BY_SEARCH,
  LIKE,
  UPDATE,
  CREATE,
  DELETE,
  COMMENT,
  START_LOADING,
  END_LOADING,
  GET_OWN_POSTS,
  GET_LIKED_POSTS,
} from "../constants/actionTypes";
import * as api from "../api";

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchPosts(page);

    dispatch({
      type: FETCH_ALL,
      payload: { data, currentPage, numberOfPages },
    });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPost(id);
    dispatch({
      type: FETCH_POST,
      payload: { post: data },
    });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const {
      data: { data },
    } = await api.fetchPostsBySearch(searchQuery);
    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post, navigate) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
    navigate(`/posts`);

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log({ message: error.message });
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {}
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);

    dispatch({ type: COMMENT, payload: data });

    return data.comments;
  } catch (error) {
    console.log(error.message);
  }
};

export const getOwnPosts = (username, navigate) => async (dispatch) => {
  try {
    const { data } = await api.getOwnPosts(username);

    dispatch({ type: GET_OWN_POSTS, payload: data });

    return data;
  } catch (error) {
    navigate("/not-found");
  }
};

export const getLikedPosts = (username, navigate) => async (dispatch) => {
  try {
    const { data } = await api.getLikedPosts(username);

    dispatch({ type: GET_LIKED_POSTS, payload: data });

    return data;
  } catch (error) {
    navigate("/not-found");
  }
};
