import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="lnb">
      <h1>CSS Style Guide</h1>
      <ul>
        <li>
          <Link to="/">01. Backgrounds</Link>
        </li>
        <li>
          <Link to="/font">02. font</Link>
        </li>
        <li>
          <Link to="/bem">03. BEM Css Style</Link>
        </li>
        <li>
          <Link to="/import">04. Css import</Link>
        </li>
        <li>
          <Link to="/example">05. Css Example</Link>
        </li>
        <li>
          <Link to="/sassbem">06. Sassbem</Link>
        </li>
        <li>
          <Link to="/code">07. Code Style</Link>
        </li>
        <li>
          <Link to="/button">08. button</Link>
        </li>
        <li>
          <Link to="/checkbox">09. checkbox</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
