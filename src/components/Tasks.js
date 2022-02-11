import React, { useContext } from "react";

// Icons
import check from "../assets/icons/check.svg";
import edit from "../assets/icons/edit.svg";
import trash from "../assets/icons/trash.svg";
import dots from "../assets/icons/dots.svg";

// ontext
import { TaskContext } from "../contexts/TaskContextProvider";

const Tasks = () => {
  const { tasks, dispatch } = useContext(TaskContext);

  return (
    <section className="m-5 mb-10">
      {tasks.map((task) => {
        return (
          <div key={task.id} className={`flex relative items-center justify-between bg-teal-100 p-3 mb-4 rounded-md border shadow-md transition-all ${task.isCompleted && 'shadow-none !bg-white'}`}>

            <div className="flex items-center">
              <span className="border-r border-teal-800 pr-3 font-bold text-lg text-teal-800">
                {task.category[0].toUpperCase()}
              </span>
              <p className={`ml-3 text-teal-900 font-semibold ${task.isCompleted && 'line-through'}`}>
                {task.title}
              </p>
            </div>
            {/* task title */}

            <img src={dots} alt="more" onClick={() => dispatch({type: "SWITCH-SHOW-OPTIONS", payload: task})} className="w-5 sm:hidden cursor-pointer"/>
            {task.isShowOptions && (
              <>
                <div onClick={() => dispatch({type: "SWITCH-SHOW-OPTIONS", payload: task})} className="fixed top-0 right-0 bottom-0 left-0 sm:hidden z-10"></div>
                <div className="w-fit bg-white border rounded-md overflow-hidden absolute right-0 bottom-16 shadow-md sm:hidden z-20">
                  <div
                    className="flex w-44 py-2 px-3 items-center cursor-pointer hover:bg-teal-50">
                    <img src={edit} alt="edit" className="w-8 p-1 mr-2 rounded-md bg-sky-800"/>
                    <span>Edit</span>
                  </div>
                  <div 
                    onClick={() => dispatch({type: "REMOVETASK", payload: task})}
                    className="flex w-44 py-2 px-3 items-center cursor-pointer hover:bg-teal-50">
                    <img src={trash} alt="trash" className="w-8 p-1 mr-2 rounded-md bg-red-700"/>
                    <span>Delete</span>
                  </div>
                  <div 
                    onClick={() => dispatch({type: "COMPLETETASK", payload: task})}
                    className="flex w-44 py-2 px-3 items-center cursor-pointer hover:bg-teal-50">
                    <img src={check} alt="complete" className="w-8 p-1 mr-2 rounded-md bg-teal-700"/>
                    <span>Complete</span>
                  </div>
                </div>
              </>
            )}
            {/* this section will be showen in small screens */}

            <div className="gap-2 select-none hidden sm:flex">
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
            {/* this section will be showen in large screens */}

          </div>
        );
      })}
    </section>
  );
};

export default Tasks;
