import React ,{useState} from "react";

function EditTodoForm({editTodo,task}) {

  const [value,setValue]=useState(task.task);

  const handelSubmit = (e) => {
    e.preventDefault()
    editTodo(value,task.id)
    setValue("")

   
  };

  return (
    <form className="TodoForm" onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="Update Task?"
        className="todo-input"
        onChange={(e)=>{setValue(e.target.value)}}
        value={value}
      />
      <button className="todo-btn" type="submit">
        Update Task
      </button>
    </form>
  );
}

export default EditTodoForm;
