import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import CoursesGrid from "../components/CoursesGrid";
import SuccessStories from "../components/SuccessStories";
import Stats from "../components/Stats";
import Features from "../components/Features";

import courses from "../data/courses";



export default function Home() {
  return (
    <>
      <Hero />
      <Categories />  
      <CoursesGrid courses={courses} />
      <SuccessStories />
      <Stats />
      <Features />

    </>
  );
}
