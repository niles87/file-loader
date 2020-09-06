import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Nav } from "./components/Nav";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Container>
          <h1>Personal Photo Album</h1>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={SignUp} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
