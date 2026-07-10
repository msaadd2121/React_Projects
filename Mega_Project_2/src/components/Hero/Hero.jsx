import React from "react";
import th from "../../assets/th.jpg";
import mobile from "../../assets/mobile.jpg"
import saad_image from "../../assets/saad_image.jpg"
import card1 from "../../assets/card1.jpg"
import card2 from "../../assets/card2.jpg"
import { useNavigate } from "react-router-dom";
export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="px-4 py-16 text-center sm:px-6 md:py-24">
      <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-yellow-400 px-4 py-2">
        <div className="flex -space-x-2">
         <img
         src={th}
         alt="User"
         className="h-8 w-8 rounded-full object-cover border-2 border-white"
         />
         <img
         src={saad_image}
         alt="User"
         className="h-8 w-8 rounded-full object-cover border-2 border-white"
         />
         <img
         src={card1}
         alt="User"
         className="h-8 w-8 rounded-full object-cover border-2 border-white"
         />
         <img
         src={card2}
         alt="User"
         className="h-8 w-8 rounded-full object-cover border-2 border-white"
         />
        </div>
        <span className="text-sm text-gray-700">
          Trusted by 20k+ people
        </span>
      </div>

      <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-normal leading-tight text-gray-900 sm:text-6xl md:text-6xl">
        We Help Brands Grow With
        <span className="block text-amber-500">
          Performance Marketing
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base text-gray-600 sm:text-2xl">
       At our agency, we take pride in delivering impactful <br />solutions that combine creativity,strategy, and<br /> technology.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <button onClick={() => navigate("/contact")} className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-amber-300 sm:px-8 sm:py-4 sm:text-base">
          Contact Me
        </button>

        <button className="rounded-full bg-gray-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700 sm:px-8 sm:py-4 sm:text-base">
          Digital Marketing
        </button>
      </div>

      <div className="w-full flex justify-center pt-10 sm:pt-16 lg:pt-20 pb-4 px-4 sm:px-6 lg:px-8">
  <img
    src={mobile}
    alt="Banner"
    className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl h-auto rounded-2xl object-cover"
  />
</div>
    </section>
  );
}