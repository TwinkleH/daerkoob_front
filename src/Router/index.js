import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import React from "react";
import Home from "../pages/Home";
import Mypage from "pages/Mypage";
import Auth from "../pages/Auth";
import Form from "../pages/Form";
import Navbar from "Layout/Navbar";
import Footer from "Layout/Footer";
import Notice from "../pages/Notice/index";
import Detail from "../pages/Detail";
import useCurrentUser from "Hooks/useCurrentUser";
import FriendPage from "pages/Mypage/FriendPage";
import NotFound from "pages/NotFound";
const Router = () => {
  const { currentUser } = useCurrentUser();
  const pushWhenSignedIn = (Component) =>
    currentUser.id !== 0 ? (
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
        <Route path="/friendPage/:id" component={FriendPage} />
        <Route path="/auth" component={Auth} />
        <Route path="/form" component={Form} />
        <Route path="/notice" component={Notice} />
        {/* <Route path="/transcription" component={Review} /> */}
        <Route path="/detail/:isbn?" component={Detail} />
        {/*        
        <Route path="/bookregister/:id" component={BookRegister} />
        id를 파라미터로 받기
         */}
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
