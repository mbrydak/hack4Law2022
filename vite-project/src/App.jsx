import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import AlanContainer from "./components/AlanAIContainer";
import { AlanContextExample } from "./components/AlanContextExample";
import MenuItems from "./components/Menu/MenuItems";
import Home from "./components/Home/Home";
import Test from "./components/Test/Test";
import i18next from "i18next";

const App = () => {
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
  });

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  return (
    <>
      <div>
        {/* <button onClick={() => handleClick("pl")}>PL</button>
        <button onClick={() => handleClick("en")}>En</button> */}
      </div>
      <MenuItems />
      <Home />
      <AlanContextExample.Provider value={{ values, setValues }}>
        <AlanContainer />
      </AlanContextExample.Provider>
    </>
  );
};

export default App;
