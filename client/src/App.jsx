import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import axios from "axios";
import Cookies from "universal-cookie";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./layout/NotFound";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import TodoList from "./components/TodosList";
const cookies = new Cookies();
const App = () => {
  const [state, setState] = useState({
    user: null,
    token: null,
  });
  const [page, setPage] = useState("");

  useEffect(() => {
    validateAuth();
  }, []);

  const validateAuth = async () => {
    try {
      if (cookies.get("access_token")) {
        // make a req to server to validate the token
        const res = await axios.get(
          `http://localhost:8080/validatetoken/${cookies.get("access_token")}`
        );
        const { user, token } = res.data;
        console.log(user, token, "her");
        setState({ user, token });
      }
    } catch (error) {
      console.log(error);
      localStorage.removeItem("access_token");
    }
  };
  return (
    <div>
      <Navbar page={page} setState={setState} />
      <Routes>
        <Route path="/" element={<Home state={state} />} />
        <Route path="/signup" element={<Signup state={state} />} />
        <Route
          path="/login"
          element={<Login state={state} setState={setState} />}
        />
        <Route
          path="/todos"
          element={
            <TodoList state={state} setState={setState} setPage={setPage} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
