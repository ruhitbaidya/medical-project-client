"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage: React.FC = () => {
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
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We’re here to help! Reach out to us for any inquiries, feedback, or
            support.
          </p>
        </motion.div>

        {/* Contact Details and Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Contact Information
            </h3>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-purple-500" />
              <p className="text-gray-600 text-lg">+91 12345 67890</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-purple-500" />
              <p className="text-gray-600 text-lg">info@diagnosticcenter.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-purple-500" />
              <p className="text-gray-600 text-lg">
                123 Medical Lane, Kolkata, West Bengal, India
              </p>
            </div>

            {/* Map */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.016396177608!2d88.36388231536345!3d22.57573358518076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a7f3d3093d%3A0x2b3e0e8f4f5f5f5f!2sMedical%20Lane%2C%20Kolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sin!4v1631012345678!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
