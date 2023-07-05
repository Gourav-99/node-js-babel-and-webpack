import axios from "axios";
import React, { useEffect, useState } from "react";

import Cookies from "universal-cookie";

const cookies = new Cookies();
const Header = ({
  setState,
  todos,
  setTodos,
  inputValue,
  setInputValue,
  isEditMode,
  setIsEditMode,
  currentEditItem,
}) => {
  const handleSubmit = async (e) => {
    try {
      const addTodo = await axios.post("/todos/createTodo", {
        title: inputValue,
      });
      if (addTodo.status === 200) {
        setTodos(addTodo.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (e) => {
    let updateTodo = todos.find((todo) => todo._id === currentEditItem);
    updateTodo.title = inputValue;
    const updatedItem = await axios.patch(`/todos/${updateTodo._id}`, {
      title: updateTodo.title,
    });
    setTodos((prevTodos) => [...prevTodos]);
    setIsEditMode(!isEditMode);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium">Todo list</h1>
        </div>
        <div className="relative w-full my-3">
          <input
            onChange={handleChange}
            value={inputValue}
            type="search"
            id="add-todo"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add item to your todo list"
            required=""
          />
          {isEditMode ? (
            <button
              onClick={handleEdit}
              type="submit"
              id="Edit-todo-btn"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              type="submit"
              id="add-todo-btn"
              className=" text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add
            </button>
          )}
        </div>
      </div>
      {/* <List todos={todos} handleComplete={handleComplete} /> */}
      {/* <p className="list-state text-slate-500">EMPTY LIST</p>
        <div id="todo-container" />
        <p className="text-xs text-slate-500 text-center">
          Last updated
          <span id="last-updated" />
        </p> */}
    </>
  );
};

export default Header;
