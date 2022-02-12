import React, { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [oldTask, setOldTask] = useState();

  return (
    <ModalContext.Provider value={{ isShowModal, setIsShowModal, oldTask, setOldTask }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
