import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Feast from "./pages/About";
import News from "./pages/News";
import Contacts from "./pages/Contacts";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/feast" element={<Feast />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
        
      </Routes>
    </Router>
  );
};

export default App;
