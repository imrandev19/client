import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/category/all-categories")
      .then((res) => {
        if (res.data.success) {
          setCategories(res.data.data); // because controller returns { success, data }
        }
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);
 

  return (
    <section className="py-12 relative z-10 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Popular Categories</h2>

        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={10}
          slidesPerView={6}
          slidesPerGroup={1}
          loop={true}
          className="pb-10"
        >
          {categories.map((c) => (
            <SwiperSlide key={c._id}>
              <div className="w-[170px] ml-5 h-[140px] flex flex-col items-center justify-center bg-white rounded shadow cursor-pointer hover:shadow-lg transition">
                <div className="text-3xl mb-2 text-red-600">
                  {/* If backend sends thumbnailImage URL */}
                  {c.thumbnailImage ? (
                    <img
                      src={c.thumbnailImage}
                      alt={c.name}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    "📁" // fallback emoji if no image
                  )}
                </div>
                <p className="text-sm font-medium text-center">{c.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
