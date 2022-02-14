import React, { useContext, useEffect } from "react";

// Icons
import check from "../assets/icons/check.svg";
import edit from "../assets/icons/edit.svg";
import trash from "../assets/icons/trash.svg";
import dots from "../assets/icons/dots.svg";

// Contexts
import { TaskContext } from "../contexts/TaskContextProvider";
import { ModalContext } from "../contexts/ModalContextProvider";

const Tasks = () => {
  const { tasks, dispatch } = useContext(TaskContext);
  const {setIsShowModal, setOldTask} = useContext(ModalContext);

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks"));
    if (localTasks) {
      dispatch({type: "GET-LOCAL-TASKS", payload: JSON.parse(localStorage.getItem("tasks"))})
    }
  }, [])

  const editTask = (task) => {
    setIsShowModal(true);
    setOldTask(task);
    dispatch({type: "SWITCH-SHOW-OPTIONS", payload: task});
  }

  return (
    <section className="mx-5 mb-10">
      {tasks.map((task) => {
        return (
          <div key={task.id} className={`flex relative items-center justify-between p-3 mb-4 last:mb-0 rounded-md border shadow-md transition-all dark:bg-slate-800 dark:border-slate-800 ${task.isCompleted ? 'bg-white shadow-none dark:bg-inherit dark:border dark:border-slate-700' : 'bg-teal-50'}`}>

            <div className="flex items-center">
              <span className="border-r border-teal-800 pr-3 font-bold text-lg text-teal-800 dark:text-teal-500 dark:border-teal-500">
                {task.category[0].toUpperCase()}
              </span>
              <p className={`ml-3 text-teal-900 font-semibold dark:text-slate-400 ${task.isCompleted && 'line-through'}`}>
                {task.title}
              </p>
            </div>
            {/* task title */}

            <img src={dots} alt="more" onClick={() => dispatch({type: "SWITCH-SHOW-OPTIONS", payload: task})} className="w-5 sm:hidden cursor-pointer select-none"/>
            {task.isShowOptions && (
              <>
                <div onClick={() => dispatch({type: "SWITCH-SHOW-OPTIONS", payload: task})} className="fixed top-0 right-0 bottom-0 left-0 sm:hidden z-10"></div>
                {/* backdrop for closing options */}

                <div className="w-fit bg-white font-semibold border rounded-md overflow-hidden absolute right-0 bottom-16 shadow-md sm:hidden z-20 dark:bg-slate-700 dark:text-slate-300 dark:border-0">

                  <div
                    onClick={() => editTask(task)}
                    className="flex w-44 py-2 px-3 items-center cursor-pointer hover:bg-teal-50 dark:hover:bg-slate-600">
                    <img src={edit} alt="edit" className="w-8 p-1 mr-2 rounded-md bg-sky-800"/>
                    <span>Edit</span>
                  </div>

                  <div 
                    onClick={() => dispatch({type: "REMOVE-TASK", payload: task})}
                    className="flex w-44 py-2 px-3 items-center cursor-pointer hover:bg-teal-50 dark:hover:bg-slate-600">
                    <img src={trash} alt="trash" className="w-8 p-1 mr-2 rounded-md bg-red-700"/>
                    <span>Delete</span>
                  </div>

                  <div 
                    onClick={() => dispatch({type: "COMPLETE-TASK", payload: task})}
                    className="flex w-44 py-2 px-3 items-center cursor-pointer hover:bg-teal-50 dark:hover:bg-slate-600">
                    <img src={check} alt="complete" className="w-8 p-1 mr-2 rounded-md bg-teal-700"/>
                    <span>Complete</span>
                  </div>

                </div>
              </>
            )}
            {/* this section will be showen in small screens */}

            <div className="gap-2 select-none hidden sm:flex">
              <img
                onClick={() => {
                  setIsShowModal(true);
                  setOldTask(task);
                  dispatch({type: "SWITCH-SHOW-OPTIONS", payload: task});
                }}
                className="w-8 h-8 p-1 bg-sky-800 rounded-md cursor-pointer"
                src={edit}
                alt="edit"
              />
              <img
                onClick={() => dispatch({type: "REMOVE-TASK", payload: task})}
                className="w-8 h-8 p-1 bg-red-700 rounded-md cursor-pointer"
                src={trash}
                alt="trash"
              />
              <img
                onClick={() => dispatch({type: "COMPLETE-TASK", payload: task})}
                className="w-8 h-8 p-1 bg-teal-700 rounded-md cursor-pointer"
                src={check}
                alt="copmlete"
              />
            </div>
            {/* this section will be showen in large screens */}

          </div>
        );
      })}
    </section>
  );
};

export default Tasks;
