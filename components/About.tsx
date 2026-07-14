"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";

const stats = [
  { value: "4+", label: "Featured Projects" },
  { value: "10+", label: "Core Technologies" },
  { value: "3+", label: "Technical Domains" },
  { value: "2026", label: "Final Year" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="sectionContainer">
        <div className="sectionHeading">
          <p className="sectionEyebrow">ABOUT ME</p>
          <h2>Turning ideas into reliable digital products.</h2>
          <p>
            I combine software engineering, artificial intelligence, cloud
            computing, and modern web technologies to build practical,
            scalable solutions.
          </p>
        </div>

        <div className="aboutGrid">
          <motion.article
            className="aboutCard aboutMain"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="aboutIcon">
              <Sparkles size={24} />
            </div>
            <h3>Hello, I&apos;m Nishadi.</h3>
            <p>
              I am a Software Engineering undergraduate at the University of
              Sri Jayewardenepura. My interests include full-stack development,
              machine learning, cloud-native systems, MLOps, and human-centered
              software design.
            </p>
            <p>
              I enjoy learning through practical projects and turning technical
              ideas into clean, useful, and understandable applications.
            </p>
          </motion.article>

          <motion.article
            className="aboutCard"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GraduationCap size={25} />
            <h3>Education</h3>
            <p>B.Comp (Hons) in Software Engineering</p>
            <span>University of Sri Jayewardenepura</span>
          </motion.article>

          <motion.article
            className="aboutCard"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MapPin size={25} />
            <h3>Based in</h3>
            <p>Sri Lanka</p>
            <span>Open to internships and graduate opportunities</span>
          </motion.article>
        </div>

        <div className="statsGrid">
          {stats.map((stat) => (
            <div className="statCard" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
