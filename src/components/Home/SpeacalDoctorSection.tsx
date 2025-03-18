"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaBrain,
  FaBaby,
  FaTooth,
  FaEye,
  FaFlask,
} from "react-icons/fa";

const DoctorCategoriesSection: React.FC = () => {
  const categories = [
    {
      name: "General Physician",
      icon: <FaHeartbeat className="text-4xl text-purple-500" />,
      description: "Comprehensive care for all your general health needs.",
    },
    {
      name: "Cardiologist",
      icon: <FaHeartbeat className="text-4xl text-purple-500" />,
      description: "Specialized care for heart and cardiovascular health.",
    },
    {
      name: "Neurologist",
      icon: <FaBrain className="text-4xl text-purple-500" />,
      description: "Expertise in treating brain and nervous system disorders.",
    },
    {
      name: "Pediatrician",
      icon: <FaBaby className="text-4xl text-purple-500" />,
      description: "Dedicated care for infants, children, and adolescents.",
    },
    {
      name: "Dentist",
      icon: <FaTooth className="text-4xl text-purple-500" />,
      description: "Professional dental care for a healthy smile.",
    },
    {
      name: "Ophthalmologist",
      icon: <FaEye className="text-4xl text-purple-500" />,
      description: "Specialized eye care and vision health.",
    },
    {
      name: "Pathologist",
      icon: <FaFlask className="text-4xl text-purple-500" />,
      description: "Diagnostic services for accurate medical testing.",
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
          <h2 className="text-4xl font-bold text-gray-800">
            Doctor Categories
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our specialized doctors and find the right care for your
            health needs.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 5, scale: 1.05 }} // Rotate and scale on hover
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-center">{category.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mt-4 text-center">
                {category.name}
              </h3>
              <p className="text-gray-600 mt-2 text-center">
                {category.description}
              </p>
              <div className="flex justify-center mt-6">
                <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorCategoriesSection;
