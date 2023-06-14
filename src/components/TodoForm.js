import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");


  const handelSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");

  };

  return (
    <form className="TodoForm" onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="What is the task tody ?"
        className="todo-input"
        onChange={(e) => {
          setValue(e.target.value);
      
        }}
        value={value}
      />

        <button className="todo-btn" type="submit">
          Add Task
        </button>
    </form>
  );
}

export default TodoForm;
