import { BrowserRouter, Switch, Route } from "react-router-dom";

import React from "react";
import Home from "../pages/Home";
import Mypage from "pages/Mypage";
import Auth from "../pages/Auth";
import Review from "../pages/Review";

const Router = () => {
  return (
    <>
      <div>
        <h1>router</h1>
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mypage" component={Mypage} />
          <Route path="/login" component={Auth} />
          <Route path="/signup" component={Auth} />
          <Route path="/review" component={Review} />
          <Route path="/transcription" component={Review} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
