import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { AlanContextExample } from "../components/AlanContextExample";

const Test = () => {
  const { t } = useTranslation();
  const { values } = useContext(AlanContextExample);

  return (
    <>
      <h1>Test</h1>
      <h3>{t("Header.test")}</h3>
      <form>
        <input value={values.name} />
        <input value={values.surname} />
        <input value={values.email} />
        <input value={values.number} />
      </form>
    </>
  );
};

export default Test;
