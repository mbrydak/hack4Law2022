import React from "react";
import { useTranslation } from "react-i18next";

const Test = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>Test</h1>
      <h3>{t("Header.test")}</h3>
    </>
  );
};

export default Test;
