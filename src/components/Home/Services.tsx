"use client";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Diagnostic Imaging",
      description:
        "State-of-the-art imaging services including X-Ray, MRI, and CT scans for accurate diagnosis.",
      icon: "🩺",
    },
    {
      title: "Laboratory Tests",
      description:
        "Comprehensive lab tests for blood, urine, and other samples with fast and reliable results.",
      icon: "🧪",
    },
    {
      title: "Health Checkups",
      description:
        "Complete health checkup packages tailored to your needs for preventive care.",
      icon: "🩸",
    },
    {
      title: "Cardiology Services",
      description:
        "Advanced cardiac diagnostics including ECG, stress tests, and echocardiography.",
      icon: "❤️",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Our Diagnostic Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
