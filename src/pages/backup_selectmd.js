import React from "react";
import "../css/accordian.scss";
const selectMd = () => {
  const [accordionValue, setAccordionValue] = useState("");
  const [checksel, setChecksel] = useState(false);
  const [initialTitle, setInitialTitle] = useState("셀렉트 박스 기본");
  const ToggleCheck = () => {
    checksel ? setChecksel(false) : setChecksel(true);
  };
  return (
    <>
      <select>
        <option>내용1</option>
        <option>내용2</option>
        <option>내용3</option>
        <option>내용4</option>
      </select>
      <div className={`accordian ${checksel === true ? "on" : "off"}`} onClick={ToggleCheck}>
        {initialTitle}
        <div className={`accordianSub ${checksel === true ? "on" : "off"}`}>
          <div onClick={() => setInitialTitle("내용1")}>내용1</div>
          <div onClick={() => setInitialTitle("내용222내용222")}>내용222내용222</div>
          <div onClick={() => setInitialTitle("내용333내용333")}>내용333내용333</div>
        </div>
      </div>
    </>
  );
};
export default selectMd;
