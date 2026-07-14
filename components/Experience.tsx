"use client";

import { motion } from "framer-motion";
import { Banknote, Presentation, Users } from "lucide-react";

const items = [
  {
    icon: <Banknote size={24} />,
    period: "Apr 2022 – Jan 2023",
    title: "Trainee",
    place: "People’s Bank",
    text: "Gained practical exposure to banking operations, office work, teamwork, punctuality, responsibility, and professional communication.",
  },
  {
    icon: <Presentation size={24} />,
    period: "Ongoing",
    title: "Mathematics & ICT Tutor",
    place: "School Students",
    text: "Support students in Sinhala-medium Mathematics, English-medium ICT, and A/L Combined Mathematics while developing communication and mentoring skills.",
  },
];

export default function Experience() {
  return (
    <section className="section sectionAlt" id="experience">
      <div className="sectionContainer">
        <div className="sectionHeading">
          <p className="sectionEyebrow">WORK & SERVICE</p>
          <h2>Professional growth through practice, teaching, and service.</h2>
        </div>

        <div className="experienceGrid">
          {items.map((item, index) => (
            <motion.article
              className="experienceCard"
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="experienceIcon">{item.icon}</div>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <strong>{item.place}</strong>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
