import React from "react";

export default function Hero() {
  return (
    <section className="bg-cover bg-center h-[500px] text-black flex items-center"
  style={{ backgroundImage: "url('/uploads/banner_bg.png')" }}>
       
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold leading-tight">
            Become an IT Pro & Rule the Digital World
          </h1>
          <p className="mt-4 text-lg">
            Pick your desired course from more than 45 trending options.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#courses" className="px-6 py-3 bg-white text-sky-700 rounded font-medium">
              Browse Courses
            </a>
            <a href="#seminar" className="px-6 py-3 border rounded">Join Free Seminar</a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="/uploads/hero.png" alt="hero" className="w-full rounded shadow" />
        </div>
      </div>
    </section>
  );
}
