import { SET_LOADER } from "./actions/ui";
import { API_SUCCESS, API_ERROR } from "./actions/api";
import { LOGOUT } from "./actions/auth";

export default (
  state = {
    isAuthUser: !!localStorage.getItem("user"),
    user: {},
    isLoading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case API_SUCCESS:
      console.log("Going to set local storage = ", action.payload);
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, isAuthUser: true, user: action.payload, error: null };
    case API_ERROR:
      console.log("Going to set API_ERROR = ", action.payload);

      return { ...state, error: action.payload, isAuthUser: false };
    case SET_LOADER:
      console.log("reducer set loader ", action);
      return { ...state, isLoading: action.payload };
    case LOGOUT:
      localStorage.removeItem("user");
      return { ...state, isAuthUser: false, user: {} };
    default:
      return state;
  }
};
