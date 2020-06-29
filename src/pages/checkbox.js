import React, { useState } from "react";
import "../css/checkbox.scss";

const Checkbox = () => {
  const [check, setCheck] = useState(false);
  const ToggleCheck = () => {
    check ? setCheck(false) : setCheck(true);
  };

  return (
    <>
      <input type="checkbox" value={check} onClick={ToggleCheck} type="checkbox" className={`checkbox ${check === true ? "on" : "off"}`} />
    </>
  );
};

export default Checkbox;
