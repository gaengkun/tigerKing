import React, { useState } from "react";

const Button = () => {
  const [checkBox, setCheckBox] = useState(false);
  const ToggleCheck = () => {
    check ? setCheck(false) : setCheck(true);
  };

  return (
    <div>
      sadf
      <input type="checkbox" checked={checkBox} onClick={ckck} className={checkBox === true ? "on" : "off"} />
    </div>
  );
};

export default Button;
