import React from "react";

const TaskItem = ({ task, toggleCheck, removeTask, index }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleCheck(index);
    }
  };

  return (
    <li className={`task-item ${task.checked ? "completed" : ""}`}>
      <div className="task-content">
        <i
          className={`fa-regular ${task.checked ? "fa-square-check" : "fa-square"}`}
          onClick={() => toggleCheck(index)}
          onKeyDown={handleKeyPress}
          tabIndex="0"
          role="button"
          aria-label={task.checked ? "Mark as incomplete" : "Mark as complete"}
        ></i>
        <span
          className="text"
          tabIndex="0"
          onKeyDown={handleKeyPress}
          role="button"
          aria-label={`Task: ${task.text}`}
        >
          {task.text}
        </span>
      </div>
      <button className="remove-button" onClick={() => removeTask(index)}>✖</button>
    </li>
  );
};

export default TaskItem;
