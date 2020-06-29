import Background from "pages/Background";
import React from "react";
import { Route, Switch } from "react-router-dom";

export default () => {
  return (
    <React.Suspense>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Background} />
        <Route exact path="/css/" component={Css} />
        <Route exact path="/font" component={Font} />
        <Route exact path="/start" component={Start} />
        <Route exact path="/example" component={Example} />
        <Route exact path="/sassbem" component={Sassbem} />
        <Route exact path="/checkbox" component={Checkbox} />
      </Switch>
    </React.Suspense>
  );
};
