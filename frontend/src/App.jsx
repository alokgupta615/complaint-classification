import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import Hero from "./components/home/Hero";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "../src/components/home/Home";
import About from "../src/components/about/About";
import Contact from "../src/components/contact/Contact";
import Lodge from "../src/components/lodge-complaint/Lodge";
import Track from "../src/components/track-complaint/Track";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* <Route path="*" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lodge" element={<Lodge />} />
        <Route path="/track" element={<Track />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
