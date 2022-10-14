import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AlanContextExample } from "../AlanContextExample";
import { Input } from "./styled";

const Test = () => {
  const { t } = useTranslation();
  const { values } = useContext(AlanContextExample);

  return (
    <>
      <h1>Test</h1>
      <h3>{t("Header.test")}</h3>
      <form>
        <Input value={values.name} />
        <Input value={values.surname} />
        <Input value={values.email} />
        <Input value={values.number} />
      </form>
    </>
  );
};

export default Test;
