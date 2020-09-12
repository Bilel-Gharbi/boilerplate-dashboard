import * as TYPE from "../actions/types";

const initialState = {
  isLogged: true,
  token: "",
  email: "",
  role: "admin",
  userInfo: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.LOGIN:
    case TYPE.SIGNUP:
    case TYPE.STAY_LOGGED:
      localStorage.setItem("authorization", action.payload.token);
      return { ...state, ...action.payload };

    case "FETCH_USER_DATA":
      return { ...state, ...action.payload };

    case "LOGOUT":
      return { ...initialState };

    default:
      return state;
  }
};

export default authReducer;
