import React from "react";
import "../css/selectmd.scss";

export default function SelectBoxComponent(props) {
  const { state, dispatch } = props;
  console.log(state.boxList);
  console.log(state.selectIdx);

  const handleClick = (idx) => {
    dispatch({ type: "open" });
    dispatch({ type: "select", idx: idx });
    if (state.boxList) {
    }
  };

  console.log(state.valueText);

  return (
    <div className="selectModule" style={{ width: `${props.width}px` }}>
      <div className={`select ${state.isOpen ? "open" : "close"}`} onClick={() => dispatch({ type: "open" })}>
        {state.boxList[state.selectIdx || 0].text}
      </div>
      <div className={`optionBox ${state.isOpen ? "open" : "close"}`}>
        {state.boxList.map((item, index) => {
          return (
            <div className="option" key={index} onClick={() => handleClick(index)}>
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
