// src/components/TodoForm.jsx
import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        type="text" 
        placeholder="Add a new task..." 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        className="todo-input"
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
};

export default TodoForm;
