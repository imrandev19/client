import React from "react";

const courses = [
  {
    name: "Professional Graphic Design",
    reviews: "14,400",
    students: "18,000",
    fee: "50,000 BDT",
  },
  {
    name: "Motion Graphics",
    reviews: "4,160",
    students: "5,200",
    fee: "50,000 BDT",
  },
  {
    name: "UX / UI Design",
    reviews: "2,800",
    students: "3,500",
    fee: "50,000 BDT",
  },
  {
    name: "Digital Image Editing",
    reviews: "4,000",
    students: "5,000",
    fee: "20,000 BDT",
  },
  // add more as needed
];

const CategoryCourses = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Graphic & Multimedia
        </h2>
        <div className="">
            
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="">
                <img className="rounded-t-lg" src="/uploads/course_1662552115.jpg" alt="course_1662552115.jpg" />
                <div className="px-3 mt-2">
                    <h6 className="text-[#df6812] text-[14px] font-bold">All Course</h6>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h3>
                <div className="text-gray-600 mb-4">
                  <span className="font-medium">{course.reviews} Reviews</span>{" "}
                  · <span>{course.students} Students</span>
                </div>
                <div className="flex justify-between items-center pb-3">
                    <div className="text-[14px] font-semibold text-gray-700 ">Course Fee {course.fee}</div>
                <button className="block border-[1px]  border-[#df6812] text-red-800 px-[6px] py-[5px] rounded hover:bg-[#df6812] transition hover:cursor-pointer hover:text-white text-[14px] font-medium">
                  Click for Discount
                </button>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-100 p-6 rounded-lg inline-block">
            <h4 className="text-2xl font-semibold mb-2">Admission Is Going On</h4>
            <p className="text-gray-700 mb-4">Enroll to any online or offline course now– take one step ahead towards a competent career</p>
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
