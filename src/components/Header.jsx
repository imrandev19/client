import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow font-sans">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src="/uploads/logo.png" alt="logo" className="h-10" />
          <span className="text-xl font-bold">Creative IT</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-[18px] font-semibold">
          <Link to="/" className="hover:text-accent">Home</Link>
          <a href="#courses" className="hover:text-accent text-[18px] font-semibold">Courses</a>
          <a href="#success" className="hover:text-accent">Success Story</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded">Login</button>
          <button className="px-4 py-2 rounded bg-accent text-white">Enroll</button>
        </div>
      </div>
    </header>
  );
}
