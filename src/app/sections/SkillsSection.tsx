"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Code, Server, Globe, Layout, Smartphone, Database } from "lucide-react";

// Skill categories and data
const skillCategories = [
  {
    name: "Frontend",
    icon: <Globe size={24} />,
    color: "#0ea5e9",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    name: "Backend",
    icon: <Server size={24} />,
    color: "#8b5cf6",
    skills: [
      { name: "PHP", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "Python", level: 70 },
      { name: "CodeIgniter", level: 90 },
      { name: "Laravel", level: 85 },
    ],
  },
  {
    name: "Mobile",
    icon: <Smartphone size={24} />,
    color: "#f97316",
    skills: [
      { name: "Flutter", level: 85 },
      { name: "Dart", level: 80 },
      { name: "Mobile UI Design", level: 75 },
    ],
  },
  {
    name: "Database",
    icon: <Database size={24} />,
    color: "#22c55e",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 75 },
      { name: "SQLite", level: 85 },
    ],
  },
  {
    name: "UI/UX",
    icon: <Layout size={24} />,
    color: "#ec4899",
    skills: [
      { name: "Figma", level: 80 },
      { name: "Adobe Photoshop", level: 85 },
      { name: "Adobe Illustrator", level: 80 },
    ],
  },
  {
    name: "Tools & DevOps",
    icon: <Code size={24} />,
    color: "#6366f1",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Linux", level: 80 },
      { name: "Server Administration", level: 75 },
      { name: "VMware", level: 70 },
      { name: "Proxmox", level: 70 },
    ],
  },
];

// Data for radar chart
const radarData = [
  { skill: "Frontend", value: 90 },
  { skill: "Backend", value: 85 },
  { skill: "Mobile", value: 85 },
  { skill: "Database", value: 80 },
  { skill: "UI/UX", value: 80 },
  { skill: "DevOps", value: 75 },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

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

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              Skills
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-primary-500 mx-auto rounded-full"
            ></motion.div>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Various technical capabilities I've developed throughout my career journey.
            </motion.p>
          </div>

          {/* Radar Chart and Skill Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Radar Chart */}
            <motion.div
              variants={itemVariants}
              className="col-span-1 lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-center">
                Overview Keahlian
              </h3>
              <div className="h-72 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius="80%" data={radarData}>
                    <PolarGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                    <PolarAngleAxis dataKey="skill" stroke="#6b7280" />
                    <PolarRadiusAxis domain={[0, 100]} axisLine={false} tick={false} />
                    <Radar
                      name="Skill Level"
                      dataKey="value"
                      stroke="#0ea5e9"
                      fill="#0ea5e9"
                      fillOpacity={0.6}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Skill Categories */}
            <motion.div
              variants={containerVariants}
              className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className="p-2 rounded-lg mr-3"
                      style={{ backgroundColor: `${category.color}20`, color: category.color }}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold">{category.name}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{skill.name}</span>
                          <span className="text-gray-500 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                          <motion.div
                            className="h-1.5 rounded-full"
                            style={{ backgroundColor: category.color }}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 text-center">
              Additional Skills
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Power BI", 
                "Radio Communication", 
                "Kanban", 
                "Agile Methodology", 
                "Jigsaw Hexagon Mining",
                "Supervisory Leadership",
                "Job Safety Analysis (JSA)",
                "IBPR K3",
                "5S Implementation",
                "ISO 9001",
                "TOEFL Score 495"
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#0ea5e920" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={containerVariants}>
            <motion.h3
              variants={itemVariants}
              className="text-xl font-bold mb-6 text-center"
            >
              Certifications
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "Mobile Flutter IDN.ID",
                  year: "2024",
                  color: "#0ea5e9",
                },
                {
                  name: "ISO 9001 Internal Auditing Certificate",
                  year: "2023",
                  color: "#8b5cf6",
                },
                {
                  name: "Implement 5S To Improve Productivity",
                  year: "2023",
                  color: "#f97316",
                },
                {
                  name: "MikroTik MTCNA",
                  year: "2021",
                  color: "#22c55e",
                },
                {
                  name: "BNSP Database Design for the Web",
                  year: "2021",
                  color: "#ec4899",
                },
                {
                  name: "BNSP Program & Software Development",
                  year: "2019",
                  color: "#6366f1",
                },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4"
                  style={{ borderLeftColor: cert.color }}
                >
                  <div className="font-medium">{cert.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {cert.year}
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