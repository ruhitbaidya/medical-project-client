"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaHeartbeat,
  FaBrain,
  FaBaby,
  FaTooth,
  FaEye,
  FaFlask,
  FaXRay,
  FaStethoscope,
} from "react-icons/fa";

const MedicalIconsSlider: React.FC = () => {
  const medicalIcons = [
    {
      icon: <FaHeartbeat className="text-6xl text-purple-500" />,
      text: "Cardiology",
    },
    {
      icon: <FaBrain className="text-6xl text-purple-500" />,
      text: "Neurology",
    },
    {
      icon: <FaBaby className="text-6xl text-purple-500" />,
      text: "Pediatrics",
    },
    {
      icon: <FaTooth className="text-6xl text-purple-500" />,
      text: "Dentistry",
    },
    {
      icon: <FaEye className="text-6xl text-purple-500" />,
      text: "Ophthalmology",
    },
    {
      icon: <FaFlask className="text-6xl text-purple-500" />,
      text: "Pathology",
    },
    {
      icon: <FaXRay className="text-6xl text-purple-500" />,
      text: "Radiology",
    },
    {
      icon: <FaStethoscope className="text-6xl text-purple-500" />,
      text: "General Medicine",
    },
  ];

  return (
    <div className="container mx-auto px-[10px] mt-[80px]">
      <div className="p-[30px] bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg shadow-lg">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Our Medical Specialties
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore the wide range of medical services we offer to ensure your
            health and well-being.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {medicalIcons.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 text-center">
                  {item.text}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MedicalIconsSlider;
