import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";

import Cookies from "universal-cookie";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./layout/NotFound";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import TodoList from "./components/TodosList";
import { useDispatch, useSelector } from "react-redux";
import { validateToken } from "./actions/auth";
const cookies = new Cookies();
const App = () => {
  const [state, setState] = useState({});
  console.log("on logout", state);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth);
  useEffect(() => {
    if (data) {
      setState(data);
    }
  }, [data]);

  useEffect(() => {
    validateAuth();
  }, []);

  const validateAuth = () => {
    const cookie = cookies.get("access_token");
    if (cookie) {
      dispatch(validateToken(cookie));
    }
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
