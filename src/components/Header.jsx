import React from "react";
import { Link } from "react-router-dom";
import LanguageSwitch from "./SwitchLan";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallSharp } from "react-icons/io5";
import { GoBook } from "react-icons/go";
export default function Header() {
  return (
    <header className=" shadow font-sans z-100">
      <div className="bg-gradient-to-r from-red-600 to-red-400 ">
        <div className="container mx-auto flex items-center justify-between py-2 px-6">
          <div className="flex gap-7">
            <div className="flex gap-2 text-white items-center">
              <HiOutlineMail className="text-[22px]" />
          <h4 className="text-[20px] font-semibold text-white ">01777308777</h4>
            </div>
          <div className="flex gap-2 text-white items-center text-[22px]">
            <IoCallSharp />
          <h4 className="text-[20px] font-semibold text-white">info@creativeitinstitute.com</h4>
          </div>
        </div>
        <div>
          <LanguageSwitch/>
        </div>
        </div>
      </div>
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
          <div className="text-[20px] font-semibold text-white flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-400  px-4 py-3 rounded-xl">
            <GoBook className="icon-thicker-stroke text-3xl" />
            <p>Browse Courses</p>
        </div>
        </div>
      </div>
    </header>
  );
}
