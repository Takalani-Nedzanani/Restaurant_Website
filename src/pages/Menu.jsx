import React from "react";
import Navbar from "../components/Navbar";
const Menu = () => {
  return (
    <div className="min-h-screen p-8">
        <Navbar />
      <h1 className="text-4xl font-bold text-center">Menu</h1>
      <p className="text-center mt-4">Explore our delicious dishes!</p>
    </div>
  );
};

export default Menu;
