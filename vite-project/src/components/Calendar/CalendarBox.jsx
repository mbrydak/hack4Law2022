import React from "react";

const Calendar = () => {
  return (
    <>
      <div style={{ height: "800px" }}>
        <iframe
          src="https://calendly.com/hack4law/30min"
          width="100%"
          height="100%"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
};

export default Calendar;
