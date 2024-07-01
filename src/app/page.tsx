"use client";

import React from "react";
import { motion } from "framer-motion";
import TypingEffect from "@/components/TypingEffect";
import SocialIcons from "@/components/SocialIcons";
import ToggleSwitch from "../components/ToggleSwitch";
import { useTheme } from "../context/ThemeContext";

export default function Home() {
  const jobTitle = "Programmer II";
  const linkedInUrl = "https://www.linkedin.com/in/kyle-greer-9201a3115/";
  const githubUrl = "https://github.com/kgreer0210";
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <ToggleSwitch />
      <header
        className={`p-6 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center"
        >
          Kyle Greer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-xl text-center mt-2"
        >
          {jobTitle} | Next.js Enthusiast | Problem Solver
        </motion.p>
      </header>

      <nav
        className={`${theme === "dark" ? "bg-gray-700" : "bg-gray-200"} p-4`}
      >
        <ul className="flex justify-center space-x-4">
          {["About", "Skills", "Projects", "Education", "Contact"].map(
            (item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400"
                >
                  {item}
                </a>
              </motion.li>
            )
          )}
        </ul>
      </nav>

      <main className="container mx-auto mt-8 px-4">
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
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
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
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
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div
            className={`p-4 rounded mb-4 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">
              Fireworks Inventory Management Web Application
            </h3>
            <p>
              Developed a custom application for a local fireworks business to
              track inventory, manage shows, and generate picking slips for
              warehouse operations.
            </p>
          </div>
          <div
            className={`p-4 rounded mb-4 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">
              Back Office Applications (Work Project)
            </h3>
            <p>
              Leading the development of new back-office applications using
              SymXchange API, built with Next.js, Tailwind, and various React
              libraries.
            </p>
          </div>
        </section>

        <section id="education" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Education & Certifications
          </h2>
          <ul className="list-disc list-inside">
            <li>
              Bachelor&apos;s degree in Information Technology, specializing in
              Web and Mobile Programming
            </li>
            <li>
              Various Udemy course certificates in web development technologies
            </li>
          </ul>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
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
          theme === "dark" ? "bg-gray-800" : "bg-gray-300"
        } text-center p-4 mt-8`}
      >
        <p>&copy; 2024 Kyle Greer. All rights reserved.</p>
        <SocialIcons linkedInUrl={linkedInUrl} githubUrl={githubUrl} />
      </footer>
    </div>
  );
}
