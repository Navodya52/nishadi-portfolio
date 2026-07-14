"use client";

import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "JWT Authentication"],
  },
  {
    title: "AI & Data",
    items: ["Python", "Scikit-learn", "XGBoost", "Pandas", "MLflow", "Machine Learning"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Docker", "Azure", "GitHub Actions", "Git", "Vercel", "API Deployment"],
  },
  {
    title: "Databases & Tools",
    items: ["MySQL", "MongoDB", "Firebase", "Postman", "VS Code", "Figma"],
  },
];

export default function Skills() {
  return (
    <section className="section sectionAlt" id="skills">
      <div className="sectionContainer">
        <div className="sectionHeading">
          <p className="sectionEyebrow">SKILLS & TECHNOLOGIES</p>
          <h2>A modern toolkit for building complete solutions.</h2>
          <p>
            My projects cover frontend, backend, AI, cloud, deployment, and
            developer tooling.
          </p>
        </div>

        <div className="skillsGrid">
          {groups.map((group, index) => (
            <motion.article
              className="skillCard"
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <h3>{group.title}</h3>
              <div className="skillTags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
