import React from "react";
import { Switch, Route } from "react-router-dom";

import Feed from "./Page/Feed";
import New from "./Page/New";


export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/new" component={New} />
    </Switch>
  );
};

export default Routes;
