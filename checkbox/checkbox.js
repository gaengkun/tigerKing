import "";
import React, { useState } from "react";

const [checkbox, setCheckbox] = useState(false);

const handleChange = e => {
  setCheckbox(e.target.checked);
};

const checkbox = () => {
  return (
    <div>
      <div>
        <input type="checkbox" className={} />
      </div>
    </div>
  );
};

export default checkbox;
