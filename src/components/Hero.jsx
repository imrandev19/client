import React from "react";
import { FaPlay } from "react-icons/fa"; // Play icon
import { GoBook } from "react-icons/go";
export default function Hero() {
  return (
    <section className="relative text-black flex items-center min-h-screen py-12 bg-cover bg-center"
  style={{ backgroundImage: "url('/uploads/banner_bg.png')" }}>
      {/* Background image */}
     

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 relative z-10">
        {/* Left content */}
        <div className="md:w-1/2">
          <h1 className="font-sans text-5xl font-bold leading-20 w-[550px]">
            Become an IT Pro & Rule the{" "}
            <span className="font-extrabold bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">
              Digital World
            </span>
          </h1>
          <p className="mt-4 text-lg  w-[550px]">
            With a vision to turn manpower into assets, Creative IT Institute is
            ready to enhance your learning experience with skilled mentors and
            an updated curriculum. Pick your desired course from more than 45
            trendy options.
          </p>
          <div className="flex items-center gap-10 my-5">
            <div className="btn-gradient cursor-pointer">
  <GoBook className="icon-thicker-stroke text-2xl" />
  <p>Browse Courses</p>
</div>
            <div className="btn-gradient cursor-pointer">
  <GoBook className="icon-thicker-stroke text-2xl" />
  <p>Join Free Seminar</p>
</div>
          </div>
          <div className="w-[550px] flex gap-2 items-center">
            <img src="/uploads/iso.png" alt="iso.png" />
              <p className="font-bold text-xl w-[350px]">One of the best ISO certified IT
Training Institutes in Bangladesh</p>
          </div>
        </div>

        {/* Right banner with border & play button */}
        <div className="md:w-1/2 relative">
          <img
            src="/uploads/hero.png"
            alt="hero"
            className="w-full rounded-2xl shadow border-[10px] border-white"
          />

          {/* Play button with animated circle */}
          <button
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play Video"
          >
            {/* Animated ripple circle (slower custom animation) */}
            <span className="absolute w-20 h-20 rounded-full bg-red-600 opacity-40 animate-slowping"></span>

            {/* Play button */}
            <span className="relative w-16 h-16 flex items-center justify-center rounded-full text-red-600 bg-white shadow-lg hover:scale-110 transition-transform">
              <FaPlay size={24} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
