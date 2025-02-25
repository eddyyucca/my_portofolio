"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/eddyyucca",
      icon: <Github size={20} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/eddy-adha-saputra",
      icon: <Linkedin size={20} />,
    },
    {
      name: "Email",
      href: "mailto:eddyyucca@gmail.com",
      icon: <Mail size={20} />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/eddyyucca",
      icon: <Instagram size={20} />,
    },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <div className="text-xl font-mono font-bold text-primary-600 dark:text-primary-400">
                Eddy<span className="text-secondary-600 dark:text-secondary-400">.dev</span>
              </div>
            </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Eddy Adha Saputra. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Navigation & Links */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Tentang
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Proyek
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Keahlian
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Kontak
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:eddyyucca@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  eddyyucca@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+6281399995003"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  +62 813-9999-5003
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Banjarmasin, Indonesia
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Keahlian
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600 dark:text-gray-400">Frontend Development</li>
              <li className="text-gray-600 dark:text-gray-400">React & Next.js</li>
              <li className="text-gray-600 dark:text-gray-400">Flutter</li>
              <li className="text-gray-600 dark:text-gray-400">UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Syarat dan Ketentuan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}