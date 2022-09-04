import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/gif/panda" >Gif de Pandas</Link>
        <Link to="/gif/peru" >Gif de Peru</Link>
        <Link to="/gif/futbol" >Gif de Futbol</Link>
        <Route path="/gif/:keyword" component={ListOfGifs}></Route>
      </section>
    </div>
  );
}

export default App;
