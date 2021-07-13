import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Checkout from "./pages/Checkout";
// import styled from "styled-components";

import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className="app">
          <Route exact path="/">
            <Home />
          </Route>
          <Switch>
            <Route exact path="/detail">
              <Detail />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
