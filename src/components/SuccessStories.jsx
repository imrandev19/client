import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlay } from "react-icons/fa"; // Play icon
import { GoBook } from "react-icons/go";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6  ">
          {stories.length > 0 ? (
            stories.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white max-w-[636px] max-h-[358px] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition relative"
              >
                <img
                  className="w-full  object-cover"
                  src={item.thumbnailImage}
                  alt={item.studentName}
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
            ))
          ) : (
            <p className="text-center text-gray-500">No success stories found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
