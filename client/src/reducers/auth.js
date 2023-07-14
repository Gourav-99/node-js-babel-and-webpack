const initialState = {
  token: null,
  user: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "VALIDATE_TOKEN":
      return action.payload;
    case "USER_LOGIN":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};
