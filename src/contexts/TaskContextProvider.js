import React, { createContext, useReducer } from "react";

// Functions
import { saveTasks } from "../helpers/saveToLocalStorage";

export const TaskContext = createContext();

const initialState = [];

const reducer = (tasks, action) => {
  switch (action.type) {
    case "ADD-TASK":
      saveTasks([ action.payload, ...tasks]);
      return [action.payload, ...tasks];

    case "EDIT_TASK":
      const oldTask = tasks.find(task => task.id === action.payload.oldTask.id);
      oldTask.title = action.payload.newTask.title;
      oldTask.category = action.payload.newTask.category;
      saveTasks(tasks);
      return [...tasks];

    case "REMOVE-TASK":
      const removedTask = tasks.find((task) => task.id === action.payload.id);
      const removedTaskIndex = tasks.indexOf(removedTask);
      tasks.splice(removedTaskIndex, 1);
      saveTasks(tasks);
      return [...tasks];

    case "COMPLETE-TASK":
      const completedTask = tasks.find((task) => task.id === action.payload.id);
      completedTask.isShowOptions = false;
      completedTask.isCompleted = !completedTask.isCompleted;
      saveTasks(tasks);
      return [...tasks];

    case "SWITCH-SHOW-OPTIONS":
      const switchedTask = tasks.find((task) => task.id === action.payload.id);
      switchedTask.isShowOptions = !switchedTask.isShowOptions;
      return [...tasks];

    case "GET-LOCAL-TASKS":
      return action.payload;

    default:
      return [tasks];
  }
};

const TaskContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
