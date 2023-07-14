import axios from "axios";
export const validateToken = (cookie) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/validatetoken/${cookie}`);
    const { user, token } = data;
    console.log(user, token, "here i'm");
    dispatch({ type: "VALIDATE_TOKEN", payload: { user, token } });
  } catch (error) {
    console.log(error);
  }
};
export const login = (email, password) => async (dispatch) => {
  try {
    const {
      data: { token, user },
    } = await axios.post(
      "/auth/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch({ type: "USER_LOGIN", payload: { user, token } });
  } catch (error) {
    console.log(error);
  }
};
export const logout = () => async (dispatch) => {
  try {
    await axios.get("/logout");
    dispatch({ type: "LOGOUT", payload: { user: null, token: null } });
  } catch (error) {
    console.log(error);
  }
  // return {
  //   type: "LOGOUT",
  //   payload: { user: null, token: null },
  // };
};
