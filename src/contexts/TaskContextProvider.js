import React, { createContext, useReducer } from "react";

export const TaskContext = createContext();

const initialState = [];

const reducer = (tasks, action) => {
  switch (action.type) {
    case "ADDTASK":
      return [action.payload, ...tasks];
    case "REMOVETASK":
      const newTasks = tasks.filter((task) => task.id !== action.payload.id);
      return newTasks;
    case "COMPLETETASK":
      const completedTask = tasks.find((task) => task.id === action.payload.id);
      completedTask.isCompleted = !completedTask.isCompleted;
      return [...tasks];
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
