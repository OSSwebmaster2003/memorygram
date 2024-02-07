import {
  AUTH,
  LOGOUT,
  GET_PROFILE,
  START_LOADING,
  END_LOADING,
  SAVE_PROFILE_INFO,
} from "../constants/actionTypes.js";

const authReducer = (state = { authData: null, isLoading: true }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    case GET_PROFILE:
      return {
        ...state,
        authData: action.data,
        loading: false,
        errors: null,
      };
    case SAVE_PROFILE_INFO:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return {
        ...state,
        authData: action?.data,
      };
    case LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
