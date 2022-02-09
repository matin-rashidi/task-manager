import React from "react";

// Components
import ListBox from "./ListBox";
import GetTaskTitle from "./GetTaskTitle";

const AddTask = () => {
  return (
    <section className="m-5">
      <GetTaskTitle />
      <ListBox />
    </section>
  );
};

export default AddTask;
