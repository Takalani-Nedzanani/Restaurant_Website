import React from "react";
import { motion } from "framer-motion";

const imageVariants = [
  { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }, // Slide up
  { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }, // Scale up
  { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }, // Slide left
  { hidden: { opacity: 0, rotate: -10 }, visible: { opacity: 1, rotate: 0 } }, // Rotate in
  { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }, // Slide down
];

const ContactPage = () => {
  return (
    <div className="bg-black text-white min-h-screen p-10">
      <div className="mt-16"></div>
      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-4 mb-16">
        {["https://th.bing.com/th/id/R.4e822adfde4eb21c37fa7abae03481cd?rik=WIe34aerPDAEXg&pid=ImgRaw&r=0",
          "https://wallpapers.com/images/featured/1pf6px6ryqfjtnyr.jpg",
          "https://th.bing.com/th/id/R.fd6d9fb798296353d32d6b5918a38902?rik=Mps9T4xzdBseDg&pid=ImgRaw&r=0",
          "https://nearfarmag.com/wp-content/uploads/2023/05/Love-That-Design-Blind-Tiger-Restaurant-_-Bar-Lounge-Dubai-5-1728x1152-1.webp",
          "https://th.bing.com/th/id/R.b7af1598fdcfa19dc2398de45ff77f31?rik=MnobBrabjrWcpA&pid=ImgRaw&r=0",
          "https://www.liquor.com/thmb/4B94pSu3bk8V106L1CzHC5sQvw0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-843630694-13ab0d8e3f1f4b38b2271ee22be6d137.jpg",
          "https://www.teahub.io/photos/full/171-1717697_smoothies-healthy-food-healthy-drinks-green-smoothies-healthy.jpg",
          "https://img.hellofresh.com/w_3840,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/es/cms/SEO/recipes/gourmet/entrecot-de-ternera.jpeg",
          "https://th.bing.com/th/id/R.e64827d97fd71d1d940a2136fa7aed33?rik=2gP4eMABQYchsA&pid=ImgRaw&r=0",
        ].map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt="Gallery"
            className="w-full h-48 object-cover rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={imageVariants[index % imageVariants.length]}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          />
        ))}
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center border-t border-gray-700 pt-10">
        <div>
          <h1 className="text-2xl font-bold">SANTIAGO RESTAURANT</h1>
        </div>

        <div>
          <h2 className="text-lg font-semibold">📍 Locations</h2>
          <ul className="mt-2 space-y-1">
            <li>14 Bloemfontein Willows</li>
            <li>25 Zamdela Sasolburg</li>
            <li>12 Thohoyandou</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">📞 Contact</h2>
          <ul className="mt-2 space-y-1">
            <li>📱 +27079 939 3955</li>
            <li>📱 +27073 707 5121</li>
            <li>✉️ contact@santiagorestaurant.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
