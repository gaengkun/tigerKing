import React, { useReducer } from "react";
import Checkbox from "./checkbox";
import SelectMd from "./selectmd";
import SlideButton from "./slideButton";

const initialValue = {
  isOpen: false,
  boxList: [
    { value: 0, text: "a" },
    { value: 1, text: "b" },
    { value: 2, text: "c" },
  ],
  selectIdx: 0,

  valueText: ["aa"],
};

const selectReducer = (state, action) => {
  switch (action.type) {
    case "open":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case "select":
      return {
        ...state,
        selectIdx: action.idx,
      };

    case "value":
      return {
        ...state,
        selectIdx: action.idx,
      };

    default:
      throw new Error();
  }
};

const Background = () => {
  const [state, dispatch] = useReducer(selectReducer, initialValue);
  const [state2, dispatch2] = useReducer(selectReducer, initialValue);

  return (
    <>
      <Checkbox />
      <SlideButton />
      <br />
      <br />
      <br />
      <br />
      <div className="selBox">
        <SelectMd width={100} state={state} dispatch={dispatch} />
        <SelectMd width={100} state={state2} dispatch={dispatch2} />
      </div>
      <section>
        <h2>Background Colors</h2>
        <ul className="bg_color">
          <li className="bg_BlueViolet"></li>
          <li className="bg_hotpink"></li>
          <li className="bg_orange"></li>
          <li className="bg_black"></li>
          <li className="bg_grey9e"></li>
          <li className="bg_greybd"></li>
          <li className="bg_greye"></li>
          <li className="bg_greyf5"></li>
        </ul>
      </section>

      <section>
        <h2>Gradient</h2>
        <ul className="bg_color">
          <li className="bg_orange_yellow"></li>
          <li className="bg_purple_pink_yellow"></li>
        </ul>
      </section>

      <section>
        <h2>Mypage List</h2>
        <ul className="bg_color">
          <li className="bg_mypage_green"></li>
          <li className="bg_mypage_yello"></li>
          <li className="bg_mypage_pink"></li>
          <li className="bg_mypage_purple"></li>
          <li className="bg_mypage_aquamarine"></li>
          <li className="bg_mypage_blue"></li>
          <li className="bg_mypage_hotgreen"></li>
          <li className="bg_mypage_hotred"></li>
        </ul>
      </section>

      <section>
        <h2>Cash</h2>
        <ul className="bg_color">
          <li className="bg_cash_red"></li>
          <li className="bg_cash_orange"></li>
          <li className="bg_cash_purple"></li>
        </ul>
      </section>
    </>
  );
};

export default Background;
