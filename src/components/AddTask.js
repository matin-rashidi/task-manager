import React, { useContext, useState } from "react";
import { v4 } from "uuid";

// Icon
import selector from "../assets/icons/selector.svg";

// Context
import { TaskContext } from "../contexts/TaskContextProvider";

const AddTask = () => {
  const {dispatch} = useContext(TaskContext);

  const [isShowList, setIsShowList] = useState(false);
  const [task, setTask] = useState({
    id: "",
    title: "",
    category: "Persional",
    isCompleted: false,
    isShowOptions: false,
  });

  const changeHandler = (event) => {
    setTask({
      ...task,
      title: event.target.value,
    });
  };

  const changeCategory = (event) => {
    setTask({
      ...task,
      category: event.target.name
    });
    setIsShowList(false);
  };

  const addTask = (event) => {
    event.preventDefault();

    if (task.title.trim().length > 0) {
      dispatch({ type: "ADD-TASK", payload: {...task, id: v4()}});
    }
    
    setTask({...task, title: ''});
    setIsShowList(false);
  }

  return (
    <section className="m-5 sm:flex sm:items-center">

      <form
        onSubmit={addTask} 
        className="relative sm:w-9/12 xl:w-10/12"
      >
        <input
          type="text"
          placeholder="New task..."
          value={task.title}
          onChange={changeHandler}
          className="w-full p-3 outline-none font-semibold text-teal-800 border-2 border-r-0 rounded-md focus:border-teal-800 focus:shadow-md transition-all"
        />
        <button type="submit" className="w-14 h-full p-2 rounded-r-md bg-teal-800 text-white absolute -right-px">✚</button>
      </form>
      {/* Input form for get task title */}

      <button onClick={() => setIsShowList(!isShowList)} className="w-full sm:w-3/12 sm:ml-5 sm:py-3 xl:w-2/12 flex justify-between items-center text-left border-2 rounded-md py-2 px-3 my-3 focus:border-teal-800 focus:shadow-md transition-all">
        {task.category}
        <img className="w-5 " src={selector} alt="selector" />
      </button>
      {/* button for opening and closing list box */}

      {isShowList && (
        <>
          <div onClick={() => setIsShowList(false)} className="fixed top-0 right-0 bottom-0 left-0 z-10"></div>
          {/* backdrop for colsing listBox */}

          <div className="absolute right-5 sm:top-36 w-4/12 min-w-fit bg-white flex flex-col border rounded-md shadow-md overflow-hidden z-20">

            <button onClick={changeCategory} name="Persional" className="p-3 hover:bg-teal-50 transition-all text-left">
              <span className="mr-6 font-bold text-teal-800">P</span>
              Persional
            </button>

            <button onClick={changeCategory} name="Team" className="p-3 hover:bg-teal-50 transition-all text-left">
              <span className="mr-6 font-bold text-teal-800">T</span>
              Team
            </button>

            <button onClick={changeCategory} name="Homeworks" className="p-3 hover:bg-teal-50 transition-all text-left">
              <span className="mr-6 font-bold text-teal-800">H</span>
              Homeworks
            </button>
            
            <button onClick={changeCategory} name="University" className="p-3 hover:bg-teal-50 text-left">
              <span className="mr-6 font-bold text-teal-800">U</span>
              University
            </button>

          </div>
          {/* list box items*/}
        </>
      )}

    </section>
  );
};

export default AddTask;
