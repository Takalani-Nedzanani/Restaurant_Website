import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 z-10 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-white text-xl font-bold">🍽️ SANTIAGO Restaurant</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/menu" className="text-white hover:text-gray-300">Menu</Link></li>
          <li><Link to="/feast" className="text-white hover:text-gray-300">Feast</Link></li>
          <li><Link to="/news" className="text-white hover:text-gray-300">News</Link></li>
          <li><Link to="/contacts" className="text-white hover:text-gray-300">Contacts</Link></li>
          <li><Link to="/location" className="text-white hover:text-gray-300">Location</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
