import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import AlanContainer from "./components/AlanAIContainer";
import { AlanContextExample } from "./components/AlanContextExample";
import MenuItems from "./components/Menu/MenuItems";
import Home from "./components/Home/Home";
import LawOffice from "./components/LawOffice/LawOffice";
import i18next from "i18next";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";

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
      <AlanContextExample.Provider value={{ values, setValues }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/law-office" element={<LawOffice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <AlanContainer />
      </AlanContextExample.Provider>
    </>
  );
};

export default App;
