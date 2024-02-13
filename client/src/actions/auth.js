import {
  AUTH,
  AUTH_ERROR,
  END_LOADING,
  GET_PROFILE,
  SAVE_PROFILE_INFO,
  START_LOADING,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.signin(formData);

    dispatch({ type: AUTH, data });

    router("/");

    dispatch({ type: END_LOADING });
  } catch (error) {
    const { message } = error.response.data;
    dispatch({ type: AUTH_ERROR, data: message });
    dispatch({ type: END_LOADING });
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.signup(formData);
    dispatch({ type: AUTH, data });

    dispatch({ type: END_LOADING });
    router("/");
  } catch (error) {
    const { message } = error.response.data;
    dispatch({ type: AUTH_ERROR, data: message });
    dispatch({ type: END_LOADING });
  }
};

export const visitProfile = (username) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.visitProfile(username);

    await dispatch({ type: GET_PROFILE, data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const saveProfileInfo =
  (form, username, navigate) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });

      const { data } = await api.saveProfileInfo(username, form);

      dispatch({ type: SAVE_PROFILE_INFO, data });

      await dispatch({ type: GET_PROFILE, data });

      await navigate(`/${data?.result?.username}`);

      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };
