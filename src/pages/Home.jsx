import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import CoursesGrid from "../components/CoursesGrid";
import SuccessStories from "../components/SuccessStories";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Footer from "../components/FooterExtended";
import courses from "../data/courses";
import CategoryCourses from "../components/CategoryCourses";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <CategoryCourses/>
      <CoursesGrid courses={courses} />

      <SuccessStories />
      <Stats />
      <Features />
      <Footer />
    </>
  );
}
