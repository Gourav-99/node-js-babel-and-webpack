import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";

const App = () => {

  const [todos,setTodos] = useState([]);
  const [inputValue, setInputValue]= useState('');
  const [currentEditItem, setEditItem]= useState('');
  // const [addBtn, setAddBtn]= useState('');
  // const [editBtn, setEditBtn]= useState('hidden');
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div>
      <Header todos={todos} setTodos= {setTodos}  inputValue={inputValue} setInputValue={setInputValue} isEditMode={isEditMode} setIsEditMode={setIsEditMode} currentEditItem={currentEditItem}/>
      <List todos={todos} setTodos={setTodos} setInputValue={setInputValue} isEditMode={isEditMode} setIsEditMode={setIsEditMode} setEditItem={setEditItem}/>
    </div>
  );
};

export default App;
