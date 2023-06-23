import React, { useState } from "react";
import { nanoid } from "nanoid";
const Header = ({
  todos,
  setTodos,
  inputValue,
  setInputValue,
  isEditMode,
  setIsEditMode,
  currentEditItem,
}) => {
  const handleSubmit = (e) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: nanoid(),
        title: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const handleEdit = (e) => {
    let updateTodo = todos.find((todo) => todo.id === currentEditItem);
    updateTodo.title = inputValue;
    setTodos((prevTodos) => [...prevTodos]);
    setIsEditMode(!isEditMode);
    setInputValue("");
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <header className="flex flex-col justify-between items-center">
      <div>
        <h1 className="text-3xl font-medium">Todo list</h1>
      </div>
      <div className="relative w-full my-3">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Add item to your todo list"
          value={inputValue}
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {isEditMode ? (
          <button
            onClick={handleEdit}
            className={` text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className={` text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          >
            Add
          </button>
        )}
      </div>
    </header>
  );
};
export default Header;
