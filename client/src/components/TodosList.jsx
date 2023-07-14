import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Header from "../pages/Header";
import List from "../pages/List";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../actions/todo";

const TodoList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  const [inputValue, setInputValue] = useState("");
  const [currentEditItem, setEditItem] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      dispatch(getTodos());
    }
  }, [token]);

  const handleEdit = async (title, id) => {
    setIsEditMode(!isEditMode);
    setEditItem(id);
    setInputValue(title);
  };

  return (
    <>
      <div className="antialiased  text-slate-700 mx-2">
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
          <Header
            inputValue={inputValue}
            setInputValue={setInputValue}
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
            currentEditItem={currentEditItem}
          />
          <List handleEdit={handleEdit} />
        </div>
      </div>
    </>
  );
};
export default TodoList;
