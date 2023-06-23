import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";

const App = () => {

  const [todos,setTodos] = useState([]);
  const [inputValue, setInputValue]= useState('');
  const [currentEditItem, setEditItem]= useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  const handleComplete = (id) => {
    let updateTodo = todos.find((todo) => todo.id === id);
    updateTodo.isComplete = !updateTodo.isComplete;
    setTodos((prevTodos) => [...prevTodos]);
  };
  const handleDelete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  const handleEdit = (id) => {
    setIsEditMode(!isEditMode);
    let updateTodo = todos.find((todo) => todo.id === id);
    setEditItem(updateTodo.id);
    setInputValue(updateTodo.title);
  };

  return (
    <div>
      <Header todos={todos} setTodos= {setTodos}  inputValue={inputValue} setInputValue={setInputValue} isEditMode={isEditMode} setIsEditMode={setIsEditMode} currentEditItem={currentEditItem}/>
      <List todos={todos} setTodos={setTodos} setInputValue={setInputValue} isEditMode={isEditMode} setIsEditMode={setIsEditMode} setEditItem={setEditItem} handleComplete={handleComplete} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  );
};

export default App;
