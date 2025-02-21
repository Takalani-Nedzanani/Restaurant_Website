import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="background-container">
        <div className="h-screen flex flex-col items-start
         justify-center bg-cover bg-center text-white px-6 ml-40">
          {/* Main Heading */}
          <h1 className="text-5xl font-bold p-4 rounded text-right">
            Etoile De Paris
          </h1>

          {/* Three Sentences */}
          <p className="mt-4 text-lg text-center max-w-2xl font-bold-w10 p-4 rounded">
            Welcome to the ultimate dining experience, where flavors come to life.  
            Our chefs craft exquisite dishes using the finest ingredients.  
            Indulge in a warm ambiance that makes every meal a memory.  
          </p>

          {/* Button Positioned at Bottom Right */}
          <div className="fixed bottom-20 center-10">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
              Explore Menu 🍽️
            </button>
          </div>
        </div>
      </div>
    </>
  ); 
};

export default Home;
