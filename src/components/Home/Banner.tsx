"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Autoplay } from "swiper/modules";
import img1 from "@/app/assetsc/slide1.png";
import img2 from "@/app/assetsc/slide2.png";
import img3 from "@/app/assetsc/slide3.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner: React.FC = () => {
  const sliderInfo = [
    {
      image: img1,
      name: "Ruhit Baidya",
      dgree: "this conditional to long and some how",
    },
    {
      image: img2,
      name: "Mitun Baidya",
      dgree: "this conditional to long and some how",
    },
    {
      image: img3,
      name: "Sanjib Baidya",
      dgree: "this conditional to long and some how",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-[10px] mt-[50px]">
      <div className="p-[30px] bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px]">
          {/* Left Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-bold text-gray-800">
              The Popular Diagnostic Center
            </h1>
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              molestiae nesciunt hic ipsum rem nemo autem iusto obcaecati
              quisquam excepturi?
            </p>
            <div className="mt-[40px]">
              <Link
                className="inline-block bg-purple-500 text-white px-[40px] py-[15px] rounded-lg hover:bg-purple-600 transition-all duration-300"
                href="/allDoctor"
              >
                Show All Doctors
              </Link>
            </div>
          </motion.div>

          {/* Right Section - Swiper */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay]}
              className="mySwiper"
            >
              {sliderInfo.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-lg bg-white p-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex justify-center items-center">
                      <Image
                        src={item.image}
                        width={400}
                        height={400}
                        alt={item.name}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="text-center mt-[20px]">
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 mt-2">{item.dgree}</p>
                      <button className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-all duration-300">
                        See More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
