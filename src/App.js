import React from "react";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// Context Providers
import TaskContextProvider from "./contexts/TaskContextProvider";
import ModalContextProvider from "./contexts/ModalContextProvider";

const App = () => {
  return (
    <TaskContextProvider>
      <ModalContextProvider>
        <Header />
        <Main />
        <Footer />
      </ModalContextProvider>
    </TaskContextProvider>
  );
};

export default App;
