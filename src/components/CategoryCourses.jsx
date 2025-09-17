import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSelectedCourse } from "../redux/features/courseSlice";

const CategoryCourses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const  selectedCategory  = useSelector((state) => state.category);
 const categotyId = (selectedCategory.currentCategory)
  const [courses, setCourses] = useState([]);
  // const navigate = useNavigate();
useEffect(()=>{
  axios.get(`http://localhost:5000/api/courses/category/${categotyId}`).then((res)=>{
  setCourses(res.data.data)
}).catch((error)=>{
  console.log("something went wrong", error)
})
},[])
  
const handleCourse=(course)=>{
  console.log(course._id)
    // Save to Redux
    dispatch(setSelectedCourse(course._id));

    // Navigate to details page with course._id
    navigate(`/course/${course._id}`);
}
  return (
    
    <section  className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Dynamic Category Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {selectedCategory?.name || "Courses"}
        </h2>

        {/* Courses Grid */}
        {courses.length > 0 ? (
          <div  className="hover:cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses?.map((course, idx) => (
              
              <div onClick={()=>handleCourse(course)}
                key={idx}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  className="rounded-t-lg w-full h-40 object-cover"
                  src={course.thumbnailImage}
                  alt={course.title}
                />

                <div className="px-3 mt-2">
                  <h6 className="text-[#df6812] text-[14px] font-bold">
                    {selectedCategory?.name || "All Courses"}
                  </h6>

                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {course.title}
                  </h3>

                  <div className="text-gray-600 mb-4 text-sm">
                    <span className="font-medium">
                      {course.reviews || 0} Reviews
                    </span>{" "}
                    · <span>{course.students || 0} Students</span>
                  </div>

                  <div className="flex justify-between items-center pb-3">
                    <div className="text-[14px] font-semibold text-gray-700">
                      Course Fee {course.price ? `${course.price}` : "Contact"}
                    </div>
                    <button className="block border border-[#df6812] text-red-800 px-3 py-1.5 rounded hover:bg-[#df6812] hover:text-white transition text-[14px] font-medium">
                      Click for Discount
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No courses available.</p>
        )}

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-blue-100 p-6 rounded-lg inline-block max-w-xl">
            <h4 className="text-2xl font-semibold mb-2">Admission Is Going On</h4>
            <p className="text-gray-700 mb-4">
              Enroll to any online or offline course now – take one step ahead
              towards a competent career.
            </p>
            <button className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 transition">
              Join Free Seminar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCourses;
