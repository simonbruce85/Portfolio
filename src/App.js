import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import "./App.css";


function App() {


  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
