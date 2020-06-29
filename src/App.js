// Components/App.js
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Background from "./pages/background";
import Bem from "./pages/bem";
import Checkbox from "./pages/checkbox";
import Code from "./pages/code";
import Css from "./pages/css";
import Example from "./pages/example";
import Font from "./pages/font";
import Import from "./pages/import";
import Sassbem from "./pages/sassbem";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrap">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Background}></Route>
            <Route path="/font" component={Font}></Route>
            <Route path="/bem" component={Bem}></Route>
            <Route path="/css" component={Css}></Route>
            <Route path="/import" component={Import}></Route>
            <Route path="/example" component={Example}></Route>
            <Route path="/sassbem" component={Sassbem}></Route>
            <Route path="/code" component={Code}></Route>
            <Route path="checkbox" component={Checkbox}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
