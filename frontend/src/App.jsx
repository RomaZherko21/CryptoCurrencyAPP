import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Mainpage from "./components/mainPage/MainPage";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import NavBar from "./components/NavBar";
import Profile from "./components/profile/Profile";
import CurrentCurrency from "./components/currentCurrency/CurrentCurrency";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Mainpage />
        </Route>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/currentCurrency">
          <CurrentCurrency />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
