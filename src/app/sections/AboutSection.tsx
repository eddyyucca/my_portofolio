"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Code, BookOpen, Award, Briefcase, Monitor, Smartphone } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Career timeline data
  const timeline = [
    {
      year: "2023 - Present",
      company: "PT. Bukit Makmur Mandiri Utama",
      position: "Information Technology",
      description: "Managing teams using agile methodology, analyzing data to support strategic decisions, and developing mobile and desktop applications.",
      icon: <Monitor size={20} />,
    },
    {
      year: "2022 - 2023",
      company: "PT. Cakrawala Putra Bersama",
      position: "Logistics Administration",
      description: "Managing logistics administration, proficiency in SAP, and developing Logistic & Plant application for inventory and plant management.",
      icon: <Briefcase size={20} />,
    },
    {
      year: "2021 - 2022",
      company: "RSUD Datu Sanggul Rantau",
      position: "IT Hospital Management Information System",
      description: "Designing, developing, and maintaining software, and building an Integrated Online Queue Application with SIMRS Khanza.",
      icon: <Smartphone size={20} />,
    },
    {
      year: "2019 - 2020",
      company: "PT. Via Digital Indonesia",
      position: "Information Technology",
      description: "Designing and implementing backend for applications and websites, and developing the Internal Application for Bank Indonesia Branch in South Kalimantan.",
      icon: <Code size={20} />,
    },
  ];

  // Skills data
  const skills = [
    { name: "Application Development", icon: <Monitor size={20} />, level: 90 },
    { name: "Data Analysis", icon: <BookOpen size={20} />, level: 85 },
    { name: "Agile & Scrum", icon: <Briefcase size={20} />, level: 90 },
    { name: "Mobile Development", icon: <Smartphone size={20} />, level: 85 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="text-center space-y-4">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold"
            >
              About Me
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-primary-500 mx-auto rounded-full"
            ></motion.div>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              A versatile Software Engineer with experience in building innovative solutions for 
              operational efficiency and leading agile teams.
            </motion.p>
          </div>

          {/* Bio and Image */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            {/* Image with floating badges */}
            <motion.div variants={itemVariants} className="relative order-1 md:order-1">
              <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/about.jpg" // Replace with about section image
                  alt="Eddy Adha Saputra working on a project"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  onError={(e) => {
                    // Fallback if image doesn't exist yet
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/600x800?text=Eddy+Adha";
                  }}
                />

                {/* Floating badges */}
                <motion.div
                  className="absolute top-5 left-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 glass"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                  <Award size={24} className="text-primary-500" />
                </motion.div>

                <motion.div
                  className="absolute bottom-5 right-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 glass"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                >
                  <BookOpen size={24} className="text-secondary-500" />
                </motion.div>
              </div>
            </motion.div>

            {/* Bio content */}
            <motion.div variants={itemVariants} className="space-y-6 order-2 md:order-2">
              <h3 className="text-2xl font-bold">Versatile Application Developer</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I am a versatile Application Developer with expertise in Web, Mobile, and Desktop platforms.
                Experienced in building innovative solutions for operational efficiency, managing agile teams,
                and delivering end-to-end application development.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I have proven ability to lead projects, analyze data for strategic decisions, and implement IT systems
                to optimize company operations. Known for successfully developing key applications across diverse
                industries and driving impactful results in roles ranging from software development to data
                analysis and Scrum mastery.
              </p>

              {/* Key facts */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Location</span>
                  <span className="font-medium">Banjarmasin, Indonesia</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Experience</span>
                  <span className="font-medium">5+ Years</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Email</span>
                  <a 
                    href="mailto:eddyyucca@gmail.com" 
                    className="font-medium hover:text-primary-500 transition-colors"
                  >
                    eddyyucca@gmail.com
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Education</span>
                  <span className="font-medium">BSc in Informatics Engineering</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={containerVariants}>
                          <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-center mb-8"
            >
              Key Skills
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Career Timeline */}
          <motion.div variants={containerVariants}>
                          <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-center mb-8"
            >
              Career Journey
            </motion.h3>

            <div className="relative border-l-2 border-primary-200 dark:border-primary-900 ml-3 md:ml-6 pl-8 space-y-10">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-10 md:-left-13 mt-1.5 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 border-2 border-primary-500 dark:border-primary-700 flex items-center justify-center">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow">
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm font-medium rounded-full mb-2">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-semibold">{item.position}</h4>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {item.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}