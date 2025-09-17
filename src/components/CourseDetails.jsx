import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FaPlay } from "react-icons/fa"; // Play icon
import { GoBook } from "react-icons/go";
import { Helmet } from "react-helmet-async";
export default function CourseDetails() {
  const { id } = useParams(); // get courseId from URL (/course/:id)
  const { selectedCourse } = useSelector((state) => state.course);
  const [course, setCourse] = useState(selectedCourse || null);

  useEffect(() => {
    // First check Redux
    if (selectedCourse && selectedCourse._id === id) {
      setCourse(selectedCourse);
    } else {
      // Otherwise fetch from backend
      axios
        .get(`http://localhost:5000/api/courses/course/${id}`)
        .then((res) => {
          if (res.data.success) {
            setCourse(res.data.data);
          }
        })
        .catch((error) => {
          console.log("something went wrong", error);
        });
    }
  }, [id, selectedCourse]);

  if (!course) {
    return <p className="text-center py-10">Loading course details...</p>;
  }

  return (
    
    <div className="container mx-auto px-6 py-12 bg-white">
      <Helmet>
        <title>MERN Stack Development Courses | Creative IT</title>
        <meta
          name="description"
          content="Learn MERN stack development with hands-on projects at Creative IT."
        />
      </Helmet>
      {/* Header / Title + Summary */}
      <div className="flex justify-between gap-2">
        <div className="mb-8 w-1/2 text-justify">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {course.title || "N/A"}
          </h1>
          <div className="flex flex-wrap gap-4 text-black items-center ">
            <div className="text-center bg-white w-[136px] h-[85px] rounded-2xl shadow-xl border-gray-300 border-[1px]">
              <h3>Duration</h3>
              <span className="text-[25px] font-bold">
                {course.duration || "N/A"}{" "}
              </span>
            </div>
            <div className="text-center bg-white w-[136px] h-[85px]  rounded-2xl shadow-xl border-gray-300 border-[1px]">
              <h3>Lectures</h3>
              <span className="text-[25px] font-bold">
                {course.lectures || "0"}{" "}
              </span>
            </div>
            <div className="text-center bg-white w-[136px] h-[85px]  rounded-2xl shadow-xl border-gray-300 border-[1px]">
              <h3>Projects</h3>
              <span className="text-[25px] font-bold">
                {course.projects || "0"}{" "}
              </span>
            </div>
          </div>
          <p className="mt-6 text-gray-700">{course.description}</p>
          <div className="flex items-center gap-10 my-5">
            <div className="btn-gradient cursor-pointer ">
              <p className="px-5 py-2">Admission</p>
            </div>
            <div className="btn-gradient cursor-pointer">
              <p className="px-5 py-2">Join Free Seminar</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative hover:cursor-pointer ">
          <img
            className="rounded-[25px] hover:cursor-pointer"
            src={course.thumbnailImage}
            alt="thumbnail video"
          />
          {/* Play button with animated circle */}
          <button
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play Video"
          >
            {/* Animated ripple circle (slower custom animation) */}
            <span className="absolute w-20 h-20 rounded-full bg-red-600 opacity-40 animate-slowping"></span>

            {/* Play button */}
            <span className="relative w-16 h-16 flex items-center justify-center rounded-full text-red-600 bg-white shadow-lg hover:scale-110 transition-transform">
              <FaPlay size={24} />
            </span>
          </button>
        </div>
      </div>

      {/* Enroll / Fee buttons */}
      {/* <div className="mb-8 flex flex-wrap gap-4 md:gap-8">
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-gray-800">
            Offline Fee: {course.feeOffline ? `৳${course.feeOffline}` : "TBD"}
          </span>
          <button className="mt-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Enroll Offline
          </button>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-gray-800">
            Online Fee: {course.feeOnline ? `৳${course.feeOnline}` : "TBD"}
          </span>
          <button className="mt-2 px-6 py-3 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition">
            Enroll Online
          </button>
        </div>
        <button className="mt-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition">
          Free Seminar
        </button>
      </div> */}

      {/* Course Overview + Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify">
        <div>
          <h2 className="text-2xl  mb-4 font-bold text-[40px]">Course Overview</h2>
          <p className="text-gray-700 leading-relaxed">{course.description}</p>
          {course.features && (
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
              {course.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Key Info</h2>
          <ul className="space-y-2 text-gray-600">
            <li>
              <strong>Course Category:</strong> {course.categoryName}
            </li>
            <li>
              <strong>Students Enrolled:</strong> {course.studentsEnrolled}
            </li>
            <li>
              <strong>Reviews:</strong> {course.reviewsCount}
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}
