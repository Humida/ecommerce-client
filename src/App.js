import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Home></Home>
      </div>
    </Router>
  );
}

export default App;
