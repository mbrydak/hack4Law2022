import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import AlanContainer from "./components/AlanAIContainer";
import { AlanContextExample } from "./components/AlanContextExample";
import Test from "./components/Test";
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
        <button onClick={() => handleClick("pl")}>PL</button>
        <button onClick={() => handleClick("en")}>En</button>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
      </nav>
      <AlanContextExample.Provider value={{ values, setValues }}>
        <Routes>
          <Route path="/test" element={<Test />} />
        </Routes>
        <AlanContainer />
      </AlanContextExample.Provider>
    </>
  );
};

export default App;
