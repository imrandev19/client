import React from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses";

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) return <div className="container py-12">Course not found</div>;

  return (
    <div className="container py-12">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <img src={course.thumbnail} alt={course.title} className="w-full h-64 object-cover rounded" />
          <h1 className="text-2xl font-bold mt-4">{course.title}</h1>
          <p className="mt-2 text-slate-600">Detailed course description goes here. Replace with real text or fetch from API.</p>
        </div>
        <aside className="p-4 bg-white rounded shadow">
          <div className="text-lg font-bold mb-2">{course.price} BDT</div>
          <button className="w-full bg-accent text-white py-2 rounded">Enroll Now</button>
        </aside>
      </div>
    </div>
  );
}
