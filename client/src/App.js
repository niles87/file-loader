import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Container } from "./components/Container";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Container>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
