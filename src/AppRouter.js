import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";

import Home from "./Components/Home";
import About from "./Components/About";
import Features from "./Components/Features";
import Download from "./Components/Download";
import Contact from "./Components/Contact";
import NotFound from "./NotFound"; // Create a component for 404 pages

const AppRouter = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/download" element={<Download />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
