import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded z-100 shadow hover:shadow-lg transition overflow-hidden">
      <Link to={`/course/${course.id}`}>
        <img src={course.thumbnail} alt={course.title} className="w-full h-44 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold">{course.title}</h3>
          <p className="text-sm text-slate-500">{course.category}</p>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-lg font-bold">{course.price} BDT</span>
            <span className="text-sm text-slate-500">{course.enrollments} students</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
