import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          {"hello"}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
