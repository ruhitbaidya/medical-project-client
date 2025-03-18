"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStethoscope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const AllDoctorsPage: React.FC = () => {
  const doctors = [
    {
      id: 1,
      image: "/images/doctor1.jpg", // Replace with your image path
      name: "Dr. Ruhit Baidya",
      degrees: "MBBS, MD (Cardiology)",
      specialization: "Cardiologist",
      availability: "Mon-Fri, 9 AM - 5 PM",
      location: "Main Branch, Kolkata",
    },
    {
      id: 2,
      image: "/images/doctor2.jpg", // Replace with your image path
      name: "Dr. Mitun Baidya",
      degrees: "MBBS, MS (General Surgery)",
      specialization: "General Surgeon",
      availability: "Tue-Sat, 10 AM - 6 PM",
      location: "City Branch, Kolkata",
    },
    {
      id: 3,
      image: "/images/doctor3.jpg", // Replace with your image path
      name: "Dr. Sanjib Baidya",
      degrees: "MBBS, MD (Neurology)",
      specialization: "Neurologist",
      availability: "Mon-Thu, 8 AM - 4 PM",
      location: "Main Branch, Kolkata",
    },
    {
      id: 4,
      image: "/images/doctor4.jpg", // Replace with your image path
      name: "Dr. Ananya Das",
      degrees: "MBBS, MD (Pediatrics)",
      specialization: "Pediatrician",
      availability: "Mon-Fri, 10 AM - 6 PM",
      location: "City Branch, Kolkata",
    },
    {
      id: 5,
      image: "/images/doctor5.jpg", // Replace with your image path
      name: "Dr. Priya Sen",
      degrees: "MBBS, MD (Dermatology)",
      specialization: "Dermatologist",
      availability: "Wed-Sun, 9 AM - 5 PM",
      location: "Main Branch, Kolkata",
    },
    {
      id: 6,
      image: "/images/doctor6.jpg", // Replace with your image path
      name: "Dr. Arjun Roy",
      degrees: "MBBS, MS (Orthopedics)",
      specialization: "Orthopedic Surgeon",
      availability: "Mon-Sat, 8 AM - 4 PM",
      location: "City Branch, Kolkata",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-[10px] mt-[80px]">
      <div className="p-[30px] bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg shadow-lg">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800">Our Doctors</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Meet our team of highly skilled and experienced doctors dedicated to
            providing the best care for you and your family.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Doctor Image */}
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Doctor Details */}
              <div className="mt-6 text-left">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {doctor.name}
                </h3>
                <p className="text-purple-500 font-medium mt-2">
                  {doctor.degrees}
                </p>
                <div className="flex items-center space-x-2 mt-4">
                  <FaStethoscope className="text-purple-500" />
                  <p className="text-gray-600">{doctor.specialization}</p>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <FaClock className="text-purple-500" />
                  <p className="text-gray-600">{doctor.availability}</p>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <FaMapMarkerAlt className="text-purple-500" />
                  <p className="text-gray-600">{doctor.location}</p>
                </div>
              </div>

              {/* More Details Button */}
              <div className="flex justify-start mt-6">
                <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-all duration-300">
                  More Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDoctorsPage;
