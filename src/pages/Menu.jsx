import React from "react";
import { Link } from "react-router-dom";

const MenuPage = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <div className="mt-14"></div>
      
      <p className="text-lg text-center max-w-2xl mx-auto mt-4">
        Exquisite dishes from all over the world for our guests! In addition, we
        have an extensive wine list from the best sommeliers and our own
        cocktail laboratory. That is why our drinks taste so special!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
        {[ 
          { name: "Dishes", link: "/dishes", img: "https://restaurantclicks.com/wp-content/uploads/2022/04/Popular-Italian-Foods.jpg" },
          { name: "Bar", link: "/bar", img: "https://th.bing.com/th/id/OIP.0gCr0AjckzxOyHuR0s3nuQHaE8?rs=1&pid=ImgDetMain" },
          { name: "Wine", link: "/wine", img: "https://static01.nyt.com/images/2022/11/30/dining/30winebar-list2/merlin_217021416_a5974a6f-2a70-4d75-894f-5c04b3ccfa5e-videoSixteenByNine3000.jpg" },
          { name: "Hookah", link: "/hookah", img: "https://i.pinimg.com/originals/dd/73/73/dd7373e06fafa0b5ac40e96b453abe60.jpg" }
        ].map((item, index) => (
          <Link key={index} to={item.link} className="block">
            <div className="bg-black rounded-lg overflow-hidden shadow-lg shadow-white p-3">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-72 object-cover rounded-lg"
              />
              <div className="p-4 text-center mt-4">
                <span className="text-xl font-bold bg-white text-black px-6 py-2 rounded-full inline-block">{item.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
