import React from 'react';

const GetTaskTitle = () => {
    return (
        <div className="relative">
            <input
            type="text"
            placeholder="New task..."
            className="w-full p-2 outline-none font-semibold text-teal-800 border-2 border-r-0 rounded-md focus:border-teal-800 focus:shadow-md transition-all"
            />
            <button type="submit" className="w-14 h-full p-2 rounded-r-md bg-teal-800 text-white absolute -right-px">✚</button>
      </div>
    );
};

export default GetTaskTitle;