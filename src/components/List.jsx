import React, { useState, useEffect } from "react";
import TaskAdd from "./TaskAdd";
import TaskToggle from "./TaskToggle";

const List = () => {
  const defaultTasks = [
    { text: "Reply to emails 📧", checked: false },
    { text: "Plan the week 📝", checked: false },
    { text: "Buy groceries 🛒", checked: false },
  ];

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    const parsedTasks = savedTasks ? JSON.parse(savedTasks) : null;
    return parsedTasks && parsedTasks.length > 0 ? parsedTasks : defaultTasks;
  });

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks to localStorage", error);
    }

    if (tasks.every(task => task.checked) && tasks.length > 0) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 3000);
    }
  }, [tasks]);

  const addTask = (newTask) => {
    const trimmedTask = newTask.trim();
    if (!trimmedTask) return;
    setTasks([...tasks, { text: trimmedTask, checked: false }]);
  };

  const toggleCheck = (index) => {
    setTasks(tasks.map((task, i) => (i === index ? { ...task, checked: !task.checked } : task)));
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <section className="to-do-list">
      <h2>TODO</h2>
      {showConfetti && (
        <div className="confetti-container">
          <div className="confetti">🎉</div>
          <div className="confetti">🎉</div>
          <div className="confetti">🎉</div>
          <div className="confetti">🎉</div>
          <div className="confetti">🎉</div>
          <div className="confetti">🎉</div>
        </div>
      )}
      {tasks.length > 0 && tasks.every(task => task.checked) && <div className="completed-message">All tasks are done! 🎉</div>}
      <TaskAdd addTask={addTask} />
      <TaskToggle tasks={tasks} toggleCheck={toggleCheck} removeTask={removeTask} />
    </section>
  );
};

export default List;
