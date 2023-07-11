import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import Header from "../pages/Header";
import List from "../pages/List";

const TodoList = ({ state: { token, user }, setState }) => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [currentEditItem, setEditItem] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (user && user.email) {
      getTodos();
    }
  }, []);
  const getTodos = async () => {
    let todoList = await axios.get("/todos/getTodos");
    setTodos(todoList.data.data);
    console.log(todoList, "todos");
  };

  const handleComplete = async (id) => {
    try {
      let updateTodo = todos.find((todo) => todo._id === id);
      updateTodo.isComplete = !updateTodo.isComplete;
      await axios.patch(`/todos/${id}`, {
        isComplete: updateTodo.isComplete,
      });
      setTodos((prevTodos) => [...prevTodos]);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      let deleteItem = await axios.delete(`/todos/${id}`);
      if (deleteItem.status === 200) {
        setTodos(deleteItem.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = async (id) => {
    setIsEditMode(!isEditMode);
    let updateTodo = todos.find((todo) => todo._id === id);
    setEditItem(updateTodo._id);
    setInputValue(updateTodo.title);
  };

  return (
    <>
      <div className="antialiased  text-slate-700 mx-2">
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
          <Header
            setState={setState}
            todos={todos}
            setTodos={setTodos}
            inputValue={inputValue}
            setInputValue={setInputValue}
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
            currentEditItem={currentEditItem}
          />
          <List
            todos={todos}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </>
  );
};
export default TodoList;
