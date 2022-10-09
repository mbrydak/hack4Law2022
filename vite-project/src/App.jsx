import React, { useEffect } from "react";
import alanBtnAI from "@alan-ai/alan-sdk-web";
import { Route, Routes, Link } from "react-router-dom";
import i18next from "i18next";
import Test from "./components/Test";

const App = () => {
  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

  //oczywiście możemy ten key umiesić w innym pliku i ukryć, ale biorąc pod uwagę, że nie będzie za wiele takich rzeczy - chyba sobie odpuścimy zbędne ceregiele? :D
  const key =
    "1a56f82acfd5396af1c96934ea57ec572e956eca572e1d8b807a3e2338fdd0dc/stage";

  useEffect(() => {
    alanBtnAI({
      key: key,
      onCommand: ({ command }) => {},
    });
  }, []);

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
            <Link to="/test">Books</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
};

export default App;
