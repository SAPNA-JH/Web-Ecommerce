import React from "react";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import { Image1, Image2, Image3 } from "../../assets";

const ImageList = [
  {
    id: 1,
    img: Image1,
    tittle: "upto 50% off on all Men's wear",
    description:
      "lorem his life will forever be changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 2,
    img: Image2,
    tittle: "30% off on all women's wear",
    description:
      "lorem his life will forever be changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },

  {
    id: 3,
    img: Image3,
    tittle: "70% off on all women's wear",
    description:
      "lorem his life will forever be changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];
const Hero = () => {

  var settings={

   dots:false,
   arrows:false,
   infinite: true,
   speed:800,
   slideToScroll: 1,
   autoplay: true,
   autoplaySpeed: 4000,
   cssEase: "ease-in-out",
   pauseOnHover: false,
   pauseOnFocus: true, 

  };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl  rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text content section */}
          <div className=" flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              lorem ipsum dolor sit.
            </h1>
            <p className="tet-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              ad?
            </p>
            <div>
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                Order Now
              </button>
            </div>
          </div>
          {/* image section section */}
          <div className="order-1 sm:order-2">
            <div className="relative z-10 ">
              <img
                src={Image1}
                alt=""
                className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
              />
            </div>
          </div>

          {/* text content section */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
