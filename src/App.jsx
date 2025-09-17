import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./components/Categories";
import CategoryCourses from "./components/CategoryCourses";
import Header from "./components/Header";
import Footer from "./components/FooterExtended";
import CourseDetails from "./components/CourseDetails";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category-courses" element={<CategoryCourses />} />
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
