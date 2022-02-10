import React from "react";

// Components
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// Context Provider
import TaskContextProvider from "./contexts/TaskContextProvider";

const App = () => {
  return (
    <TaskContextProvider>
      <Header />
      <Main />
      <Footer />
    </TaskContextProvider>
  );
};

export default App;
