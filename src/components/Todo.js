import React from "react";
import { Edit, Delete } from "@mui/icons-material";

function Todo({ task, toggleComplete,deleteTask,editTodo}) {
  return (
    <div className="Todo">
      <p
        className={`${task.complete ? "completed" : ""}`}
        onClick={() => {
          toggleComplete(task.id);
          
        }}
      >
        {task.task}
      </p>
      <div>
        <Edit onClick={()=>{editTodo(task.id)}} />
        <Delete onClick={()=>deleteTask(task.id)} />
      </div>
    </div>
  );
}

export default Todo;
