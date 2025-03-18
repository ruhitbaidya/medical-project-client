"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaStethoscope,
  FaClock,
  FaMapMarkerAlt,
  FaUserMd,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const DoctorDetailsPage: React.FC = () => {
  const doctor = {
    id: 1,
    image: "/images/doctor1.jpg", // Replace with your image path
    name: "Dr. Ruhit Baidya",
    degrees: "MBBS, MD (Cardiology)",
    specialization: "Cardiologist",
    experience: "10+ years",
    availability: "Mon-Fri, 9 AM - 5 PM",
    location: "Main Branch, Kolkata",
    bio: "Dr. Ruhit Baidya is a highly experienced cardiologist with over 10 years of practice. He specializes in diagnosing and treating heart-related conditions, including coronary artery disease, heart failure, and arrhythmias. Dr. Baidya is dedicated to providing personalized care to his patients and is known for his compassionate approach.",
    contact: {
      phone: "+91 12345 67890",
      email: "ruhit.baidya@example.com",
    },
    serialNumber: "A101", // Serial number for appointments
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-[10px] mt-[80px]">
      <div className="p-[30px] bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg shadow-lg">
        {/* Doctor Details Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Doctor Image */}
          <div className="flex justify-center items-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-100">
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Doctor Information */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">{doctor.name}</h1>
            <p className="text-purple-500 font-medium text-xl">
              {doctor.degrees}
            </p>
            <div className="flex items-center space-x-4">
              <FaStethoscope className="text-purple-500" />
              <p className="text-gray-600 text-lg">{doctor.specialization}</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaUserMd className="text-purple-500" />
              <p className="text-gray-600 text-lg">
                {doctor.experience} of experience
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-purple-500" />
              <p className="text-gray-600 text-lg">{doctor.availability}</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-purple-500" />
              <p className="text-gray-600 text-lg">{doctor.location}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                About Dr. {doctor.name.split(" ")[1]}
              </h3>
              <p className="text-gray-600 mt-2">{doctor.bio}</p>
            </div>

            {/* Contact Details */}
            <div className="mt-6 space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                Contact Details
              </h3>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-purple-500" />
                <p className="text-gray-600 text-lg">{doctor.contact.phone}</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-purple-500" />
                <p className="text-gray-600 text-lg">{doctor.contact.email}</p>
              </div>
            </div>

            {/* Serial Number for Appointment */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Appointment Serial Number
              </h3>
              <p className="text-purple-500 font-medium text-xl mt-2">
                {doctor.serialNumber}
              </p>
              <p className="text-gray-600 mt-2">
                Please bring this serial number when you visit for your
                appointment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Book Appointment Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start mt-12"
        >
          <button className="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600 transition-all duration-300">
            Book Appointment
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;
