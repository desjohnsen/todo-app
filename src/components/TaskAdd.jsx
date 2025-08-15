import React, { useState } from "react";

const TaskAdd = ({ addTask, clearTasks }) => {
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      addTask(newTask.trim());
      setNewTask("");
    }
  }

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className="add-button" onClick={handleAddTask}>
        Add
      </button>
      <button className="clear-button" onClick={clearTasks}>
        Clear
      </button>
    </div>
  );
};

export default TaskAdd;
