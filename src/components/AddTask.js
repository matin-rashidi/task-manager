import React, { useContext, useState } from "react";
import { v4 } from "uuid";

// Icon
import selector from "../assets/icons/selector.svg";

// Context
import { TaskContext } from "../contexts/TaskContextProvider";

const AddTask = () => {
  const {dispatch} = useContext(TaskContext);
  const [task, setTask] = useState({
    id: "",
    title: "",
    category: "Persional",
    isCompleted: false,
  })
  const [isShowList, setIsShowList] = useState(false);

  const changeHandler = (event) => {
    setTask({
      ...task,
      title: event.target.value,
    })
  }

  const changeCategory = (event) => {
    setTask({
      ...task,
      category: event.target.name
    })
    setIsShowList(false)
  }

  return (
    <section className="m-5">

      <form 
        onSubmit={(event) => {
          event.preventDefault();
          task.title.trim().length > 0 && dispatch({type: "ADDTASK", payload: {...task, id: v4()}});
          setTask({...task, title: ''})
        }} 
        className="relative">
        <input
          type="text"
          placeholder="New task..."
          value={task.title}
          onChange={changeHandler}
          className="w-full p-3 outline-none font-semibold text-teal-800 border-2 border-r-0 rounded-md focus:border-teal-800 focus:shadow-md transition-all"/>
        <button type="submit" className="w-14 h-full p-2 rounded-r-md bg-teal-800 text-white absolute -right-px">✚</button>
      </form>
      
      <button onClick={() => setIsShowList(!isShowList)} className="w-full flex justify-between items-center text-left border-2 rounded-md py-2 px-3 my-5 focus:border-teal-800 focus:shadow-md transition-all">
        {task.category}
        <img className="w-5 " src={selector} alt="selector" />
      </button>

      {isShowList && (
        <div className="w-full right-5 bg-white flex flex-col border rounded-md border-teal-800 shadow-md">
          <button onClick={changeCategory} name="Persional" className="p-3 border-b hover:bg-teal-50 transition-all rounded-t-md">
            Persional
          </button>
          <button onClick={changeCategory} name="Team" className="p-3 border-b hover:bg-teal-50 transition-all">
            Team
          </button>
          <button onClick={changeCategory} name="Homeworks" className="p-3 border-b hover:bg-teal-50 transition-all">
            Homeworks
          </button>
          <button onClick={changeCategory} name="University" className="p-3 hover:bg-teal-50 rounded-b-md">
            University
          </button>
        </div>
      )}

    </section>
  );
};

export default AddTask;
