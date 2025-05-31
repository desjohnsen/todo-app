import React from "react";
import "./app.css";

const About = () => {
  return (
    <section className="about">
      <header>
        <h2>ABOUT</h2>
      </header>
      <div className="about-content">
        <p>
        This app offers a clean, minimalist design to help you easily manage your to-do list. 
        You can quickly add tasks, mark them as completed, and track your progress. 
        It’s designed for easy navigation, whether you're managing personal goals, 
        a shopping list, or anything else.
        </p>
        <h3>Features:</h3>
        <ul>
          <li>Add custom tasks with ease</li>
          <li>Mark tasks as completed or unmark if needed</li>
          <li>View your task list and track your progress</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
