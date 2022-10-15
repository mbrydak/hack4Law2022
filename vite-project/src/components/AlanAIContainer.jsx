import React, { useState, useEffect, useContext } from "react";
import alanBtnAI from "@alan-ai/alan-sdk-web";
import { useNavigate } from "react-router";
import { AlanContextExample } from "../components/AlanContextExample";

const COMMANDS = {
  HOME: "home",
  TEST: "test",
  SAMPLE: "sample",
};

const AlanContainer = () => {
  let navigate = useNavigate();
  const { setValues } = useContext(AlanContextExample);

  const [alanInstance, setalanInstance] = useState();

  const key =
    "1a56f82acfd5396af1c96934ea57ec572e956eca572e1d8b807a3e2338fdd0dc/stage";

  useEffect(() => {
    if (alanInstance != null) return;
    setalanInstance(
      alanBtnAI({
        key: key,
        onCommand: (commandData) => {
          if (commandData.command === COMMANDS.HOME) {
            navigate("/");
          }
          if (commandData.command === COMMANDS.TEST) {
            navigate("/test");
          }
          if (commandData.command === COMMANDS.SAMPLE) {
            setValues({
              name: "Jan",
              surname: "Kowalski",
              email: "test@test.pl",
              number: "34534523",
            });
          }
        },
      })
    );
  }, []);
};

export default AlanContainer;
