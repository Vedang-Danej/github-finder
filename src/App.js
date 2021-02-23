import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Home from "./components/pages/Home";
import Alert from "./components/Layout/Alert";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import User from "./components/Users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
const App = () => {
  const [alert, setAlert] = useState(null);
  console.log("site is definitely being pulled form github");
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title=" Github Finder" icon="fab fa-github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
