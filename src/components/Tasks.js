import React, { useContext } from "react";

// Icons
import check from "../assets/icons/check.svg";
import edit from "../assets/icons/edit.svg";
import trash from "../assets/icons/trash.svg";

// ontext
import { TaskContext } from "../contexts/TaskContextProvider";

const Tasks = () => {
  const { tasks, dispatch } = useContext(TaskContext);

  return (
    <section className="m-5">
      {tasks.map((task) => {
        return (
          <div key={task.id} className={`flex items-center justify-between bg-teal-50 p-3 mb-4 rounded-md border shadow-md transition-all ${task.isCompleted && 'opacity-60 shadow-none scale-95'}`}>
            <div className="flex items-center">
              <span className="border-r border-teal-800 pr-3 font-bold text-lg text-teal-800">
                {task.category[0].toUpperCase()}
              </span>
              <p className={`ml-3 text-teal-900 font-semibold ${task.isCompleted && 'line-through'}`}>
                {task.title}
              </p>
            </div>
            <div className="flex gap-3 select-none">
              <img
                className="w-8 h-8 p-1 bg-sky-800 rounded-md cursor-pointer"
                src={edit}
                alt="edit"
              />
              <img
                onClick={() => dispatch({type: "REMOVETASK", payload: task})}
                className="w-8 h-8 p-1 bg-red-700 rounded-md cursor-pointer"
                src={trash}
                alt="edit"
              />
              <img
                onClick={() => dispatch({type: "COMPLETETASK", payload: task})}
                className="w-8 h-8 p-1 bg-teal-700 rounded-md cursor-pointer"
                src={check}
                alt="edit"
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Tasks;
