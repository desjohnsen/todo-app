import React from "react";
import TaskItem from "./TaskItem";

const TaskToggle = ({ tasks, toggleCheck, removeTask }) => {
  return (
    <ol>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          toggleCheck={toggleCheck}
          removeTask={removeTask}
          index={index}
        />
      ))}
    </ol>
  );
};

export default TaskToggle;
