import { apiRequest } from "../actions/api";
import { LOGIN } from "../actions/auth";

const SERVER_URL = `https://vaishnavenclavebackend.herokuapp.com`;
// const SERVER_URL = `http://localhost:8080`;

export const appMiddleware = () => (next) => (action) => {
  next(action);
  console.log("action payload = ", JSON.stringify(action));
  switch (action.type) {
    case LOGIN: {
      next(
        apiRequest({
          url: `${SERVER_URL}/login`,
          method: "POST",
          data: action.payload,
        })
      );
      break;
    }
    default:
      break;
  }
};
