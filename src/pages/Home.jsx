import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import CoursesGrid from "../components/CoursesGrid";
import SuccessStories from "../components/SuccessStories";
import Stats from "../components/Stats";
import Features from "../components/Features";
import { Helmet } from "react-helmet-async";
import courses from "../data/courses";
import ExSollution from "../components/ExSollution";



export default function Home() {
  return (
    <>
    <Helmet>
            <title>MERN Stack Development  | Creative IT</title>
            <meta
              name="description"
              content="Learn MERN stack development with hands-on projects at Creative IT."
            />
          </Helmet>
      <Hero />
      <Categories />  
      <ExSollution/>
        
      <SuccessStories />
      <ExSollution/>
    
   

    </>
  );
}
