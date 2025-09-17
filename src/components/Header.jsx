import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LanguageSwitch from "./SwitchLan";
import { HiOutlineMail } from "react-icons/hi";
import { IoCallSharp } from "react-icons/io5";
import { GoBook } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../redux/features/userSlice";
import axios from "axios";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const  user  = useSelector((state) => state.user.login);
  console.log(user.user.username)

  const handleSignUpBtn = () => {
    navigate("/sign_up");
  };

  const handleLoginBtn = () => {
    navigate("/login");
  };
  const handleBrowse =()=>{
    navigate("/category-courses");
  }

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/logout");
    } catch (err) {
      console.error(err);
    }
    dispatch(logoutUser());
    navigate("/"); // redirect home after logout
  };

  return (
    <header className="shadow font-sans z-100">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-red-600 to-red-400">
        <div className="container mx-auto flex items-center justify-between py-2 px-6">
          <div className="flex gap-7">
            <div className="flex gap-2 text-white items-center">
              <HiOutlineMail className="text-[22px]" />
              <h4 className="text-[20px] font-semibold text-white">
                01777308777
              </h4>
            </div>
            <div className="flex gap-2 text-white items-center text-[22px]">
              <IoCallSharp />
              <h4 className="text-[20px] font-semibold text-white">
                info@creativeitinstitute.com
              </h4>
            </div>
          </div>
          <div>
            <LanguageSwitch />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto flex items-center justify-between py-4 px-6 sticky">
        <Link to="/" className="flex items-center gap-2">
          <img src="/uploads/logo.png" alt="logo" className="h-10" />
          <span className="text-xl font-bold">Creative IT</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-[18px] font-semibold">
          <Link to="/" className="hover:text-accent">
            Home
          </Link>
          <a
            href="#courses"
            className="hover:text-accent text-[18px] font-semibold"
          >
            Courses
          </a>
          <a href="#success" className="hover:text-accent">
            Success Story
          </a>
          <a href="#contact" className="hover:text-accent">
            Contact
          </a>
        </nav>

        <div className="flex gap-3">
          {user ? (
            // ✅ Logged in: Show username + logout
            <div className="relative group">
              <button className=" px-4 py-3 border font-bold text-white rounded bg-green-600  text-center">
                <span> {user?.username} {user.user?.username}</span>
              </button>
              <div className="absolute right-0 mt-1 w-32 bg-white shadow-lg rounded-lg hidden group-hover:block">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            // ❌ Not logged in: Show signup + login
            <>
              <button
                onClick={handleSignUpBtn}
                className="px-4 py-2 border rounded hover:bg-red-500 hover:text-white hover:font-medium"
              >
                Sign Up
              </button>
              <button
                onClick={handleLoginBtn}
                className="px-4 py-2 border rounded hover:bg-red-500 hover:text-white hover:font-medium"
              >
                Login
              </button>
            </>
          )}

          {/* Browse Courses */}
          <div className="text-[20px] font-semibold text-white flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-400 px-4 py-3 rounded-xl hover:cursor-pointer">
            <GoBook className="icon-thicker-stroke text-3xl" />
            <p onClick={handleBrowse}>Browse Courses</p>
          </div>
        </div>
      </div>
    </header>
  );
}
