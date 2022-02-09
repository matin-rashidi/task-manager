import React, { useState } from "react";

// Icon
import selector from "../assets/icons/selector.svg";

const ListBox = () => {
  const [isShowList, setIsShowList] = useState(false);
  const [listValue, setListValue] = useState("Persional");

  const selectListItem = (event) => {
    setListValue(event.target.name);
    setIsShowList(false);
  }

  return (
    <>
        <button
            onClick={() => setIsShowList(!isShowList)}
            className="w-6/12 flex justify-between items-center text-left border-2 rounded-md py-2 px-3 my-3 focus:border-teal-800 focus:shadow-md transition-all"
        >
            {listValue}
            <img className="w-5 " src={selector} alt="selector" />
        </button>
        {isShowList && (
            <div className="flex flex-col w-6/12 border rounded-md border-teal-800 shadow-md">
            <button onClick={selectListItem} name="Persional" className="p-3 border-b hover:bg-teal-100 transition-all rounded-t-md">
                Persional
            </button>
            <button  onClick={selectListItem} name="Team" className="p-3 border-b hover:bg-teal-100 transition-all">
                Team
            </button>
            <button onClick={selectListItem} name="Homeworks" className="p-3 border-b hover:bg-teal-100 transition-all">
                Homeworks
            </button>
            <button onClick={selectListItem} name="University" className="p-3 hover:bg-teal-100 rounded-b-md">
                University
            </button>
            </div>
        )}
    </>
  );
};

export default ListBox;
