"use client";

import { motion } from "framer-motion";

const journey = [
  {
    period: "2005 – 2006",
    title: "Early Childhood",
    place: "Geethanjaly Pre School & Holy Family Convent Nursery",
    text: "The beginning of a journey shaped by curiosity, discipline, and learning.",
  },
  {
    period: "2007 – 2012",
    title: "Primary School",
    place: "Holy Family Convent, Kalutara",
    text: "A strong foundation in education, confidence, and responsibility.",
  },
  {
    period: "2013 – 2017",
    title: "Secondary School",
    place: "Grade 6 – Grade 11",
    text: "Years of academic consistency, competitions, leadership, and personal growth.",
  },
  {
    period: "2018 – 2020",
    title: "Advanced Level & Leadership",
    place: "Deputy Head Prefect",
    text: "A defining period that strengthened leadership, teamwork, confidence, and service.",
  },
  {
    period: "2023 – Present",
    title: "University Life",
    place: "University of Sri Jayewardenepura",
    text: "Studying Software Engineering while building projects, conducting research, and volunteering.",
  },
];

export default function Journey() {
  return (
    <section className="section sectionAlt" id="journey">
      <div className="sectionContainer">
        <div className="sectionHeading">
          <p className="sectionEyebrow">MY JOURNEY</p>
          <h2>Learning, leadership, and steady growth.</h2>
        </div>

        <div className="timeline">
          {journey.map((item, index) => (
            <motion.article
              className="timelineItem"
              key={item.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="timelineMarker" />
              <span className="timelineYear">{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <strong>{item.place}</strong>
                <p>{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
