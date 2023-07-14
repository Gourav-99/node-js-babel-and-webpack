import React from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../actions/todo";

const Header = ({
  inputValue,
  setInputValue,
  isEditMode,
  setIsEditMode,
  currentEditItem,
}) => {
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(addTodo(inputValue));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleEdit = async (e) => {
    await dispatch(editTodo(inputValue, currentEditItem));

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
        <div className="relative w-full my-2">
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
    </>
  );
};

export default Header;
