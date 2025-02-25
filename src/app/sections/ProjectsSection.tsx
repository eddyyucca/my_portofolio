"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Maximize } from "lucide-react";
import ProjectModal from "../components/ProjectModal";

// Define project type
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  details?: string;
};

// Project data
const projects: Project[] = [
  {
    id: 1,
    title: "SafetyAlertPro",
    description: "Aplikasi otomatisasi notifikasi email, pelaporan grafis, dan pemantauan izin serta commissioning unit.",
    image: "/images/projects/project1.jpg",
    category: ["web", "desktop"],
    technologies: ["React", "Node.js", "MongoDB"],
    details: "SafetyAlertPro adalah aplikasi komprehensif yang mengotomatisasi notifikasi email, memberikan pelaporan grafis, dan memantau izin serta unit commissioning. Dibangun dengan React untuk frontend yang responsif dan Node.js untuk backend yang kuat."
  },
  {
    id: 2,
    title: "EmployeeHealthInsight",
    description: "Analisis kesehatan komprehensif, integrasi data kesehatan, dan laporan kesehatan harian.",
    image: "/images/projects/project2.jpg",
    category: ["web", "mobile"],
    technologies: ["Flutter", "Firebase", "Chart.js"],
    details: "EmployeeHealthInsight menyediakan analisis kesehatan komprehensif, integrasi data kesehatan, dan laporan kesehatan harian. Dibangun dengan Flutter untuk aplikasi mobile lintas platform dan Firebase untuk backend."
  },
  {
    id: 3,
    title: "B-Mine App",
    description: "E-Simper dan Minepermit untuk manajemen digital izin pertambangan.",
    image: "/images/projects/project3.jpg",
    category: ["mobile"],
    technologies: ["Flutter", "Laravel", "MySQL"],
    details: "B-Mine App menggabungkan E-Simper dan Minepermit untuk manajemen digital izin pertambangan. Aplikasi mobile dibuat dengan Flutter, didukung oleh backend Laravel dan database MySQL untuk pengelolaan data yang efisien."
  },
  {
    id: 4,
    title: "EcoWater Insight Pro",
    description: "Aplikasi untuk memantau kualitas air di area pertambangan.",
    image: "/images/projects/project4.jpg",
    category: ["web", "desktop"],
    technologies: ["React", "Node.js", "Chart.js"],
    details: "EcoWater Insight Pro adalah solusi pemantauan kualitas air yang komprehensif untuk area pertambangan. Menggunakan React untuk visualisasi data yang kaya dan Node.js untuk pemrosesan data real-time."
  },
  {
    id: 5,
    title: "URCI Road Quality Calculator",
    description: "Aplikasi untuk menghitung kualitas jalan menggunakan metode URCI.",
    image: "/images/projects/project5.jpg",
    category: ["mobile", "web"],
    technologies: ["Flutter", "Firebase"],
    details: "URCI Road Quality Calculator memungkinkan pengguna menghitung dan memantau kualitas jalan menggunakan metode URCI (Unsurfaced Road Condition Index). Dibuat dengan Flutter dan terintegrasi dengan Firebase untuk penyimpanan data."
  },
  {
    id: 6,
    title: "Hospital Queue System",
    description: "Aplikasi Antrian Online Terintegrasi dengan SIMRS Khanza untuk RSUD.",
    image: "/images/projects/project6.jpg",
    category: ["web"],
    technologies: ["PHP", "CodeIgniter", "MySQL"],
    details: "Hospital Queue System adalah Aplikasi Antrian Online yang terintegrasi dengan SIMRS Khanza untuk RSUD. Dibangun dengan PHP dan framework CodeIgniter, sistem ini mengoptimalkan alur pasien dan mengurangi waktu tunggu."
  }
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Filter categories
  const categories = [
    { id: "all", name: "Semua" },
    { id: "web", name: "Web" },
    { id: "mobile", name: "Mobile" },
    { id: "desktop", name: "Desktop" },
  ];

  // Filter projects based on selected category
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category.includes(filter);
  });

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

  // Handle project click to open modal
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="text-center space-y-4">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold"
            >
              Proyek Terbaru
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-primary-500 mx-auto rounded-full"
            ></motion.div>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Beberapa proyek terbaik yang telah saya kembangkan menggunakan
              berbagai teknologi modern.
            </motion.p>
          </div>
          
          {/* Filter buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category.id
                    ? "bg-primary-600 dark:bg-primary-700 text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Projects grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                layoutId={`project-${project.id}`}
                whileHover={{ y: -5 }}
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 hover:scale-110"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/600x400?text=${project.title.replace(/ /g, '+')}`;
                    }}
                  />
                  
                  {/* View details button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="p-2 bg-white dark:bg-gray-800 rounded-full text-primary-600 dark:text-primary-400 transition-transform transform hover:scale-110"
                      aria-label={`View ${project.title} details`}
                    >
                      <Maximize size={20} />
                    </button>
                  </div>
                </div>
                
                {/* Project info */}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="View GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="View Live Project"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <button
                      onClick={() => openProjectModal(project)}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors ml-auto"
                      aria-label="View Project Details"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Empty state if no projects match filter */}
          {filteredProjects.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-16 bg-gray-50 dark:bg-gray-900 rounded-lg"
            >
              <p className="text-gray-500 dark:text-gray-400">
                Tidak ada proyek yang ditemukan dalam kategori ini.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}