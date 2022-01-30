import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AllBeers from "./pages/AllBeers";
import OneBeer from "./pages/OneBeer";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/beers/:id" element={<OneBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
