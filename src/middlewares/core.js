import axios from "axios";
import { API_REQUEST, apiError, apiSuccess } from "../actions/api";
import { setLoader } from "../actions/ui";

export const apiMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    console.log("Action  = ", action);
    next(action);

    if (action.type === API_REQUEST) {
      console.log("Api request setLoader = true");
      dispatch(setLoader({ state: true }));
      const { url, method, data } = action.meta;
      axios({
        method,
        url,
        data,
      })
        .then(({ data }) => {
          dispatch(apiSuccess({ response: data }));
          dispatch(setLoader({ state: false }));
        })
        .catch((error) => {
          console.log(error);
          dispatch(apiError({ error: error.response }));
          dispatch(setLoader({ state: false }));
        });
    }
  };
