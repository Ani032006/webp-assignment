import React from "react";

function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTask(task.id)}>
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;