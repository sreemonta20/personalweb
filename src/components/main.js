import React from "react";
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';

import Home from "./home";
import Contact from "./contact";
import Projects from "./projects";
import Profile from "./profile";
function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
}
export default Main;
