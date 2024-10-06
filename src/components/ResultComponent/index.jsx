import ActiveComponent from "../ActiveComponent/ActiveComponent";
import CompletedTasks from "../CompletedComponent/CompletedTasks";
import AllTasks from "../HomeComponent/AllTasks";
import styles from "./style.module.css";
import React, { useState, useEffect } from "react";

const Index = ({ activeTab }) => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const fecthTasks = async () => {
      try {
        const reponse = await fetch("http://localhost:3001/tasks");
        const data = await reponse.json();
        setTasks(data);
      } catch (e) {
        console.error("Error fetching tasks: ", e.message);
      }
    };
    fecthTasks();
  }, []);

  const handleAddTask = async () => {
    if (inputValue.trim() !== "") {
      const newTask = { title: inputValue, completed: false, showTick: false };

      try {
        const reponse = await fetch("http://localhost:3001/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newTask }),
        });

        if (reponse.ok) {
          const createdTask = await reponse.json();
          setTasks([...tasks, createdTask]);
          setInputValue("");
        } else {
          console.error("Error creating task: ", reponse.statusText);
        }
      } catch (error) {
        console.error("Error fetching tasks: ", error.message);
      }
    }
  };

  const handleToggleTick = async (index) => {
    const updatedTask = { ...tasks[index], showTick: !tasks[index].showTick };

    try {
      const response = await fetch(
        `http://localhost:3001/tasks/${updatedTask.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ showTick: updatedTask.showTick }),
        }
      );

      if (response.ok) {
        const newTasks = [...tasks];
        newTasks[index] = updatedTask;
        setTasks(newTasks);
      } else {
        console.error("Error updating task");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      const reponse = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE",
      });

      if (reponse.ok) {
        setTasks(tasks.filter((task) => task.id !== id));
      } else {
        console.error("Error deleting task");
      }
    } catch (error) {}
  };

  const handleDeleteAllChecked = async () => {
    try {
      const tasksToDelete = tasks.filter((task) => task.showTick);
      await Promise.all(
        tasksToDelete.map((task) =>
          fetch(`http://localhost:3001/tasks/${task.id}`, {
            method: "DELETE",
          })
        )
      );
      setTasks(tasks.filter((task) => !task.showTick));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="body">
      {activeTab !== "completed" && (
        <div>
          <div className={styles.form}>
            <input
              type="text"
              id="month-input"
              className={styles.formControl}
              placeholder="add details"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button className={styles.btn} onClick={handleAddTask}>
              Add
            </button>
          </div>

          {activeTab === "all" && (
            <AllTasks tasks={tasks} handleToggleTick={handleToggleTick} />
          )}

          {activeTab === "active" && (
            <ActiveComponent
              tasks={tasks}
              handleToggleTick={handleToggleTick}
            />
          )}
        </div>
      )}

      {activeTab === "completed" && (
        <CompletedTasks
          tasks={tasks}
          handleToggleTick={handleToggleTick}
          handleDeleteTask={handleDeleteTask}
          handleDeleteAllChecked={handleDeleteAllChecked}
        />
      )}
    </div>
  );
};

export default Index;
