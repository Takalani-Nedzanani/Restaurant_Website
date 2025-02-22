import React from "react";
import Navbar from "../components/Navbar";

const AboutEtoileParis = () => {
  return (
    <><Navbar />
    <div className="bg-black text-white min-h-screen p-8">
      
      <div className="mt-14"></div>
      <div className="flex items-center mb-6">
        <h1 className="text-5xl font-serif font-bold text-white mr-6">
          SANTIAGO RESTAURANT
        </h1>
        <p className="text-lg text-gray-700 text-white max-w-2xl">
        SANTIAGO RESTAURANT is a location that will become your favorite place in the heart of Paris! A romantic dinner on a panoramic terrace, a birthday with friends, or even a grand wedding – everything is possible at the SANTIAGO RESTAURANT.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-6">
        <img
          src="https://th.bing.com/th/id/OIP.SCMlU5k2OjmiOsB86Y51nwHaE8?rs=1&pid=ImgDetMain"
          alt="Outdoor dining"
          className="rounded-lg w-full h-64 object-cover" />
        <img
          src="https://th.bing.com/th/id/OIP.LCzgP22hKlDFPkuwfw_CVgHaE3?rs=1&pid=ImgDetMain"
          alt="Chefs cooking"
          className="rounded-lg w-full h-64 object-cover" />
        <img
          src="https://th.bing.com/th/id/R.32cfcf80fd225b42eabd4c7d030cc29e?rik=uYvNGVF3qhlarg&pid=ImgRaw&r=0"
          alt="Wine with Eiffel Tower view"
          className="rounded-lg w-full h-64 object-cover" />
        <img
          src="https://th.bing.com/th/id/R.2770f67b2cd9ed668fa5fad67a9a7652?rik=0eFEPbuce3wFXA&pid=ImgRaw&r=0"
          alt="Indoor dining"
          className="rounded-lg w-full h-64 object-cover" />
      </div>
    </div></>
  );
};

export default AboutEtoileParis;
