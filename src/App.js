import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useRecoilValue } from "recoil";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Checkout from "./pages/Checkout";
import Filter from './pages/Filter'

import orderState from "./state/order.state";

import "./App.css";

function App() {
  const order = useRecoilValue(orderState);
  return (
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
            {order.length > 0 ? <Checkout /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/filter">
            <Filter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
