import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Mainpage from "./components/mainPage/MainPage";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import NavBar from "./components/NavBar";

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
      </Switch>
    </Router>
  );
};

export default App;
