"use client";

import React from "react";
import { motion } from "framer-motion";
import TypingEffect from "@/components/TypingEffect";
import SocialIcons from "@/components/SocialIcons";
import ToggleSwitch from "../components/ToggleSwitch";
import { useTheme } from "../context/ThemeContext";
import profilePicture from "../../public/Kyle Profile Picture.jpg";
import Image from "next/image";

export default function Home() {
  const jobTitle = "Programmer II";
  const linkedInUrl = "https://www.linkedin.com/in/kyle-greer-9201a3115/";
  const githubUrl = "https://github.com/kgreer0210";
  const facebookUrl = "https://www.facebook.com/kyle.greer.7";
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <ToggleSwitch />
      <header
        className={`p-6 ${
          theme === "dark"
            ? "bg-gradient-to-r from-gray-800 to-gray-700"
            : "bg-gradient-to-r from-blue-100 to-blue-50"
        }`}
      >
        <div className="flex items-center justify-center mb-4">
          <div className="w-24 h-24 rounded-full bg-gray-300 mr-4">
            <Image
              src={profilePicture}
              alt="Kyle Greer"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold"
            >
              Kyle Greer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl mt-2"
            >
              {jobTitle} | Next.js Enthusiast | Problem Solver
            </motion.p>
          </div>
        </div>
      </header>

      <nav
        className={`${theme === "dark" ? "bg-gray-700" : "bg-gray-200"} p-4`}
      >
        <ul className="flex justify-center space-x-4">
          {[
            "About",
            "Skills",
            "Projects",
            "Testimonials",
            "Education",
            "Contact",
          ].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className={`hover:text-blue-400 transition-colors duration-200 ${
                  theme === "dark"
                    ? "hover:text-blue-300"
                    : "hover:text-blue-600"
                }`}
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      <main className="container mx-auto mt-8 px-4">
        <section id="about" className="mb-12">
          <h1 className="text-2xl font-bold mb-4">About Me</h1>
          <p className="mb-4">
            <TypingEffect text="Making life easier for those around me, one line of code at a time." />
          </p>
          <p className="mb-4">
            I&apos;m passionate about crafting websites and applications that
            make a real difference in people&apos;s lives. My drive comes from
            seeing how the right digital solution can streamline processes,
            solve problems, and bring ideas to life. Whether it&apos;s a sleek
            personal website, a robust web application, or an innovative mobile
            app, I love the challenge of turning concepts into reality through
            code.
          </p>
          <p>
            Currently, I&apos;m putting this passion to work as a {jobTitle} at
            Robins Financial Credit Union. Here, I specialize in PowerOn by Jack
            Henry and lead the implementation of new back-office applications.
            By leveraging cutting-edge technologies like Next.js, Tailwind, and
            various React libraries, I&apos;m building efficient solutions that
            enhance our operations and ultimately improve our members&apos;
            experience.
          </p>
        </section>

        <section id="skills" className="mb-12">
          <h1 className="text-2xl font-bold mb-4">Skills</h1>
          <ul className="grid grid-cols-2 gap-4">
            {[
              "Next.js",
              "React",
              "HTML",
              "Database Structures",
              "JavaScript",
              "Tailwind CSS",
            ].map((skill) => (
              <motion.li
                key={skill}
                className={`p-2 rounded ${
                  theme === "dark"
                    ? "bg-gray-800 border-l-4 border-blue-500"
                    : "bg-gray-100 border-l-4 border-blue-400"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </section>

        <section id="projects" className="mb-12">
          <h1 className="text-2xl font-bold mb-4">Projects</h1>
          <div
            className={`p-4 rounded mb-4 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Deepsouth Fireworks Inventory Management System
            </h3>
            <p className="mb-2">
              Developed a comprehensive web application for a local fireworks
              business, streamlining their inventory management, show planning,
              and warehouse operations. The system offers:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Real-time inventory tracking with dynamic data tables and
                overview dashboards
              </li>
              <li>
                Show management functionality, including inventory allocation
                and historical data
              </li>
              <li>
                Automated generation of picking slips for efficient warehouse
                operations
              </li>
              <li>User management system with role-based access control</li>
            </ul>
            <p className="mt-2">
              This solution significantly improved the client&apos;s operational
              efficiency, reducing inventory discrepancies and enhancing show
              planning capabilities.
            </p>
          </div>
          <div
            className={`p-4 rounded mb-4 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              SymX Apps: Next-Gen Back Office Solutions
            </h3>
            <p className="mb-2">
              Leading the development of a groundbreaking suite of
              microservices-based applications for Robins Financial Credit
              Union, designed to revolutionize back-office operations. Key
              aspects of the project include:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                Integration with legacy systems via SOAP API, bridging modern
                tech with existing infrastructure
              </li>
              <li>
                Development of targeted micro-apps for various departments,
                enhancing operational efficiency
              </li>
              <li>
                Utilization of cutting-edge web technologies: React, Next.js,
                and Tailwind CSS
              </li>
              <li>
                Implementation of Shadcn component library for consistent and
                professional UI/UX
              </li>
              <li>
                Pioneering the adoption of modern web development practices
                within the credit union
              </li>
            </ul>
            <p className="mt-2">
              This innovative project marks a significant technological leap for
              the organization, setting new standards for internal tools and
              processes. My role involves extensive research and implementation
              of best practices in React and Next.js ecosystems, ensuring a
              robust, scalable, and future-proof solution.
            </p>
          </div>
        </section>

        <section id="testimonials" className="mb-12">
          <h1 className="text-2xl font-bold mb-4">Testimonials</h1>
          <div
            className={`p-4 rounded ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <blockquote className="italic">
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.&quot;
            </blockquote>
            <p className="mt-2 font-semibold">
              - Your name here, position, company name
            </p>
          </div>
        </section>

        <section id="education" className="mb-12">
          <h1 className="text-2xl font-bold mb-4">
            Education & Certifications
          </h1>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li>
              Bachelor&apos;s degree in Information Technology, specializing in
              Web and Mobile Programming
            </li>
            <li>
              Various Udemy course certificates in web development technologies
              <ul className="list-circle list-inside ml-5 mt-2 space-y-1">
                <li>
                  The Complete 2024 Web Development Bootcamp - by Angela Yu
                </li>
                <li>
                  Next.JS 14 & React: The Complete Guide - by Maximilian
                  Schwarzmüller
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section id="contact" className="mb-12">
          <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
          <p>
            The best way to reach me is via email at:{" "}
            <a
              href="mailto:kylegreer.kg@gmail.com"
              className="text-blue-400 hover:underline"
            >
              kylegreer.kg@gmail.com
            </a>
          </p>
        </section>
      </main>

      <footer
        className={`${
          theme === "dark"
            ? "bg-gradient-to-r from-gray-800 to-gray-700"
            : "bg-gradient-to-r from-blue-100 to-blue-50"
        } text-center p-4 mt-8`}
      >
        <p>&copy; 2024 Kyle Greer. All rights reserved.</p>
        <SocialIcons
          linkedInUrl={linkedInUrl}
          githubUrl={githubUrl}
          facebookUrl={facebookUrl}
        />
      </footer>
    </div>
  );
}
