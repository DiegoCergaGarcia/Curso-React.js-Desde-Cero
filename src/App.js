import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";

import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/" >
          <img className="App-logo" alt="Giffy logo" src="/logo.png"></img>
        </Link>
        <Route component={Home} path="/"></Route>
        <Route component={SearchResults} path="/search/:keyword"></Route>
        <Route component={Detail} path="/gif/:id"></Route>
      </section>
    </div>
  );
}

export default App;
