import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch } from "react-redux";
import  {setCategory}  from "../redux/features/categorySlice"; 
import { useNavigate } from "react-router-dom";

export default function Categories() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
const [categories, setCategories] = useState([])
  const [selectedCategory,setSelectedCategory] = useState('')
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/category/all-categories")
      .then((res) => {
        if (res.data.success) {
          setCategories(res.data.data);
        }
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      });
  }, []);
const handleCategory =(category)=>{
  setSelectedCategory(category)
  dispatch(setCategory  (category)); // save in redux
  navigate("/category-courses");   // redirect
}

  return (
    <section className="py-12 relative z-10 ">
      <div className="container mx-auto px-6">

        <Swiper
  modules={[Navigation]}
  navigation={true}
  spaceBetween={5}
  slidesPerView={6}
  slidesPerGroup={1}
  loop={true}              // <--- enables infinite looping
  className="pb-10"
  breakpoints={{
    320: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 6 },
  }}
>
          {categories.map((c) => (
            <SwiperSlide key={c._id}>
              <div onClick={()=>handleCategory(c._id)}
                
                className="w-[200px] ml-5 mt-20    h-[157px] flex-none flex flex-col items-center justify-center bg-white rounded-[20px] shadow cursor-pointer hover:shadow-lg transition"
              >
                <div className="text-3xl mb-2 text-red-600">
                  {c.thumbnailImage ? (
                    <img
                      src={c.thumbnailImage}
                      alt={c.name}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    "📁"
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
