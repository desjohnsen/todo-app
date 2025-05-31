import React, { useState } from "react";

const TaskAdd = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    addTask(newTask);
    setNewTask("");
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
    </div>
  );
};

export default TaskAdd;
