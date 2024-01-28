import {
  AUTH,
  END_LOADING,
  GET_PROFILE,
  START_LOADING,
} from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);

    dispatch({ type: AUTH, data });

    router("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);

    dispatch({ type: AUTH, data });

    router("/");
  } catch (error) {
    console.log(error);
  }
};
export const visitProfile = (username) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.visitProfile(username);

    dispatch({ type: GET_PROFILE, data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
