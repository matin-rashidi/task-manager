import React, { useContext } from "react";
// Components
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import EditModal from "./EditModal";

// context
import { ModalContext } from "../contexts/ModalContextProvider";

const Main = () => {
  const { isShowModal } = useContext(ModalContext);
  return (
    <main>
      <AddTask />
      <Tasks />
      {isShowModal && <EditModal />}
    </main>
  );
};

export default Main;
