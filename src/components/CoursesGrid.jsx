import React from "react";
import CourseCard from "./CourseCard";

export default function CoursesGrid({ courses }) {
  return (
    <section id="courses" className="py-12 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Popular Courses</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
