import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import React from "react";
import Home from "../pages/Home";
import Mypage from "pages/Mypage";
import Auth from "../pages/Auth";
import Form from "../pages/Form";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Notice from "../pages/Notice/index";
import Detail from "../pages/Detail";
import useCurrentUser from "Hooks/useCurrentUser";

const Router = () => {
  const { currentUser } = useCurrentUser();
  const pushWhenSignedIn = (Component) =>
    currentUser ? (
      Component
    ) : (
      <Redirect
        to={{
          pathname: "/auth",
          state: {
            from: "/mypage",
          },
        }}
      />
    );
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mypage" render={() => pushWhenSignedIn(<Mypage />)} />
        {/* <Route path="/mypage" component={Mypage} /> */}
        <Route path="/auth" component={Auth} />
        <Route path="/form" component={Form} />
        <Route path="/notice" component={Notice} />
        {/* <Route path="/transcription" component={Review} /> */}
        <Route path="/detail/:isbn?" component={Detail} />
        {/*        
        <Route path="/bookregister/:id" component={BookRegister} />
        id를 파라미터로 받기
         */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
