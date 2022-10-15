import React from "react";
import Banner from "../Banner/Banner";
import PanelNavigation from "../PanelNavigation/PanelNavigation";
import GainSection from "../GainSection/GainSection";
import QuestionSection from "../QuestionSection/QuestionSection";

const Home = () => {
  return (
    <>
      <Banner />
      <PanelNavigation />
      <GainSection />
      <QuestionSection />
    </>
  );
};

export default Home;
