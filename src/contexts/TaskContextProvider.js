import React, { createContext, useReducer } from "react";

export const TaskContext = createContext();

const initialState = [];

const reducer = (tasks, action) => {
  switch (action.type) {
    case "ADD-TASK":
      return [action.payload, ...tasks];
    case "REMOVE-TASK":
      const newTasks = tasks.filter((task) => task.id !== action.payload.id);
      return newTasks;
    case "COMPLETE-TASK":
      const completedTask = tasks.find((task) => task.id === action.payload.id);
      completedTask.isShowOptions = false;
      completedTask.isCompleted = !completedTask.isCompleted;
      return [...tasks];
    case "SWITCH-SHOW-OPTIONS":
      const switchedTask = tasks.find((task) => task.id === action.payload.id);
      switchedTask.isShowOptions = !switchedTask.isShowOptions;
      return [...tasks];
    case "EDIT_TASK":
      const oldTask = tasks.find(task => task.id === action.payload.oldTask.id);
      oldTask.title = action.payload.newTask.title;
      oldTask.category = action.payload.newTask.category;
      return [...tasks]
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
