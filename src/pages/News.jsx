import React from "react";
import { motion } from "framer-motion";

const NewsPage = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="mt-20"></div>
      
      {/* Cuisine Section */}
      <motion.div 
        className="bg-gray-900 p-6 rounded-lg shadow-lg mb-8 flex flex-col md:flex-row items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="https://www.discoverwalks.com/blog/wp-content/uploads/2020/02/photo-1572453800999-e8d2d1589b7c-816x615.jpg"
          alt="Cuisine"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
        <motion.div 
          className="md:ml-6 mt-4 md:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold">🍽️ French Cuisine on Your Plate</h2>
          <p className="mt-2 text-gray-300">
            Our menu is a true journey to the heart of France. We offer
            sophisticated dishes that convey the traditions and unique taste of
            French gastronomy. Each dish is created with love and skill to
            provide you with an unforgettable experience! 🇫🇷
          </p>
        </motion.div>
      </motion.div>

      {/* Cocktails Section */}
      <motion.div 
        className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="md:mr-6 mb-4 md:mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold">🍹 Our Cocktails</h2>
          <p className="mt-2 text-gray-300">
            Explore a variety of premium cocktails crafted with the finest
            ingredients. Our mixologists create balanced and unique drinks,
            ensuring a delightful experience with every sip. Cheers! 🥂
          </p>
        </motion.div>
        <motion.img
          src="https://images.services.kitchenstories.io/ayUqaGww4CsIs4BQ6bfP_d0KhIE=/640x0/filters:quality(85)/images.kitchenstories.io/wagtailOriginalImages/A1390-final-photo-_2.jpg"
          alt="Cocktails"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>
    </div>
  );
};

export default NewsPage;
