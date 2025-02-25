"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowDown, ArrowRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
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

  // For the 3D animation effect
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to the center of the window
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Get mouse distance from center
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      // Set tilt values, divided by factor to reduce intensity
      setX(distanceY / 50);
      setY(-distanceX / 50);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 mt-16">
      {/* Background elements */}
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl -z-10"></div>

      {/* Main content container */}
      <div className="container mx-auto px-4 md:px-6 z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
        >
          {/* Text content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.p
              variants={itemVariants}
              className="inline-block mb-4 px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium"
            >
              Frontend Developer
            </motion.p>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Hai, Saya{" "}
              <span className="animated-gradient-text">Eddy Adha Saputra</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0"
            >
              Seorang Frontend Developer dengan pengalaman dalam React, Next.js, Flutter, dan berbagai kerangka kerja modern lainnya.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Lihat Portofolio
                <ArrowRight size={18} />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hubungi Saya
              </motion.a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center md:justify-start gap-4 mt-8"
            >
              <a
                href="https://github.com/eddyyucca"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/eddy-adha-saputra"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </motion.div>
          </div>

          {/* 3D animated image */}
          <motion.div
            variants={itemVariants}
            className="order-1 md:order-2 flex justify-center perspective-500"
            style={{
              transform: `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg)`,
              transition: "transform 0.1s ease-out"
            }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Use a placeholder image - you'll need to replace this with your actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-xl animate-pulse"></div>
              <Image
                src="/images/Profil.jpeg" // Replace with your profile picture
                alt="Eddy Adha Saputra"
                width={400}
                height={400}
                className="rounded-3xl shadow-2xl object-cover z-10 relative"
                priority
                onError={(e) => {
                  // Fallback if image doesn't exist yet
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/400x400?text=Eddy+Adha";
                }}
              />
              
              {/* Floating elements */}
              <motion.div
                className="absolute -right-8 -top-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20 glass"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <div className="text-primary-600 dark:text-primary-400 font-bold">React</div>
              </motion.div>
              
              <motion.div
                className="absolute -left-8 top-1/2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20 glass"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-secondary-600 dark:text-secondary-400 font-bold">Next.js</div>
              </motion.div>
              
              <motion.div
                className="absolute -right-4 -bottom-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-20 glass"
                animate={{ y: [0, 8, 0], rotate: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
              >
                <div className="text-green-600 dark:text-green-400 font-bold">Flutter</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="text-gray-600 dark:text-gray-300" />
        </motion.div>
      </div>
    </section>
  );
}