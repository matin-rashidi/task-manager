import React, { useContext, useState } from "react";

// Contexts
import { ModalContext } from "../contexts/ModalContextProvider";
import { TaskContext } from "../contexts/TaskContextProvider";

const EditModal = () => {
  const { oldTask, setIsShowModal } = useContext(ModalContext);
  const { dispatch } = useContext(TaskContext);

  const [newTask, setNewTask] = useState({
    title: oldTask.title,
    category: oldTask.category,
  });

  const changeHandler = (event) => {
    setNewTask({ ...newTask, title: event.target.value });
  };

  const changeCategory = (event) => {
    setNewTask({
      ...newTask,
      category: event.target.value,
    });
  };

  const sendNewTask = (event) => {
    event.preventDefault();
    dispatch({ type: "EDIT_TASK", payload: { oldTask, newTask } });
    setIsShowModal(false);
  };

  return (
    <>
      <div
        onClick={() => setIsShowModal(false)}
        className="fixed top-0 right-0 bottom-0 left-0 bg-black/[.7]"
      ></div>
      {/* backdrop for closing modal */}

      <form
        className="p-5 fixed flex flex-col justify-center items-center top-1 right-1 bottom-1 left-1 max-w-lg max-h-fit m-auto bg-white rounded-md dark:bg-slate-800"
        onSubmit={sendNewTask}
      >
        <div className="w-full">
          <input
            type="text"
            placeholder="Task title..."
            value={newTask.title}
            onChange={changeHandler}
            className="w-full p-3 outline-none font-semibold text-teal-800 border-2 rounded-md focus:border-teal-800 focus:shadow-md transition-all dark:bg-slate-700 dark:border-0 dark:text-slate-400"
          />
        </div>
        {/* get new task title */}

        <div className="w-full mt-3 border-2 rounded-md shadow-md overflow-hidden dark:bg-slate-700 dark:border-0 dark:text-slate-400">
          <div className="relative w-full h-10 flex items-center">
            <input
              type="radio"
              name="category"
              value="persional"
              id="persional"
              className="w-full h-10 appearance-none cursor-pointer checked:bg-teal-700 transition-all rounded-sm dark:checked:bg-slate-600"
              onClick={changeCategory}
            />
            <label
              htmlFor="persional"
              className="absolute left-5 cursor-pointer font-semibold"
            >
              Persional
            </label>
          </div>

          <div className="relative w-full h-10 flex items-center">
            <input
              type="radio"
              name="category"
              value="team"
              id="team"
              className="w-full h-10 appearance-none cursor-pointer checked:bg-teal-700 transition-all rounded-sm dark:checked:bg-slate-600"
              onClick={changeCategory}
            />
            <label
              htmlFor="team"
              className="absolute left-5 cursor-pointer font-semibold"
            >
              Team
            </label>
          </div>

          <div className="relative w-full h-10 flex items-center">
            <input
              type="radio"
              name="category"
              value="homeworks"
              id="homeworks"
              className="w-full h-10 appearance-none cursor-pointer checked:bg-teal-700 transition-all rounded-sm dark:checked:bg-slate-600"
              onClick={changeCategory}
            />
            <label
              htmlFor="homeworks"
              className="absolute left-5 cursor-pointer font-semibold"
            >
              Homeworks
            </label>
          </div>

          <div className="relative w-full h-10 flex items-center">
            <input
              type="radio"
              name="category"
              value="university"
              id="university"
              className="w-full h-10 appearance-none cursor-pointer checked:bg-teal-700 transition-all rounded-sm dark:checked:bg-slate-600"
              onClick={changeCategory}
            />
            <label
              htmlFor="university"
              className="absolute left-5 cursor-pointer font-semibold"
            >
              University
            </label>
          </div>
        </div>
        {/* list box items */}

        <button
          type="submit"
          className="w-full bg-teal-800 p-3 text-white font-semibold rounded-md mt-5 cursor-pointer shadow-md"
        >
          Done
        </button>
      </form>
    </>
  );
};

export default EditModal;
