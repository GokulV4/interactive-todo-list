// src/components/TodoItem.jsx
import React from "react";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo-card">
      <div className={`todo-card-content ${todo.completed ? 'completed' : ''}`}>
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => toggleTodo(todo.id)} 
          className="checkbox"
        />
        <span className="todo-text">{todo.text}</span>
        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
