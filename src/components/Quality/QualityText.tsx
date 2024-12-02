"use client"
import { motion } from "framer-motion";
const QualityText = () => {
  return (
    <div className='flex flex-col  text-white/80 p-4 group'>
    <motion.h1
        className="text-4xl font-bold text-orange-300 mb-4 group-hover:translate-x-8"
        initial={{ opacity: 0, y: 50 }} // Start from invisible and below
        whileInView={{ opacity: 1, y: 0, transition: { type: "spring", bounce: 0.5, duration: 1 } }} // Bounce and fade in
        viewport={{ once: false }} // Trigger only once when in view
      >
        High-Quality Web Development with Modern Technologies
      </motion.h1>
    <p className="text-lg mb-4">
      As a passionate web developer, I specialize in building responsive, user-friendly web applications. I leverage modern technologies like React, Next.js, and Tailwind CSS to create dynamic front-end experiences, ensuring optimal performance and seamless user interfaces.
    </p>
    <p className="text-lg mb-4">
      On the back-end, I work with Node.js, Express, PostgreSQL, and Prisma to build scalable and efficient server-side solutions. I also implement GraphQL for flexible and efficient data management, ensuring a smooth and responsive experience for both users and administrators.
    </p>
    <p className="text-lg">
      Whether you're looking for a custom web application, a robust content management system, or a fully integrated platform, I am committed to delivering high-quality solutions that meet your unique business needs.
    </p>
  </div>
  )
}

export default QualityText
