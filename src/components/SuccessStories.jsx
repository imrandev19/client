import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SuccessStories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/story/success-stories")
      .then((res) => {
        setStories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section>
      <div className="container mx-auto py-3">
        <h1 className="font-bold text-[40px] text-center">Success Stories</h1>
        <p className="text-[16px] font-medium text-gray-500 text-center my-5">
          The presence of our students in the ever expanding IT industry motivates us,
          drives us to guide more
          <span className="block">people towards a sustainable future.</span>
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stories.length > 0 ? (
            stories.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={item.thumbnailImage}
                  alt={item.studentName}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.studentName}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{item.courseName}</p>
                  <p className="text-gray-700 text-sm">{item.storyText}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No success stories found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
