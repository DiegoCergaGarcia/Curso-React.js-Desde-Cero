import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResults from "./pages/SearchResults";
import Pepito from "./context/StaticContext";

import { Link, Route } from "wouter";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <Pepito.Provider value={{
      name: 'midudev',
      suscribeteAlCanal: true
    }}>
      <div className="App">
        <section className="App-content">
          <Link to="/" >
            <img className="App-logo" alt="Giffy logo" src="/logo.png"></img>
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/"></Route>
            <Route component={SearchResults} path="/search/:keyword"></Route>
            <Route component={Detail} path="/gif/:id"></Route>
          </GifsContextProvider>
        </section>
      </div>
    </Pepito.Provider>
  );
}

export default App;
