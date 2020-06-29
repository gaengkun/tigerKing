import React, { useState } from "react";
import "../css/sidebutton.scss";

const SlideButton = () => {
  const [slideButton, setslideButton] = useState(false);
  const ToggleCheck = () => {
    slideButton ? setslideButton(false) : setslideButton(true);
  };

  return (
    <>
      <button className={`slideButton ${slideButton === true ? "on" : "off"}`} onClick={ToggleCheck}></button>
    </>
  );
};

export default SlideButton;
