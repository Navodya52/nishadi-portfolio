"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Layers3 } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "CloudPilot MLOps",
    description:
      "An end-to-end MLOps platform with model comparison, MLflow experiment tracking, FastAPI inference, Docker deployment, and production-focused architecture.",
    tags: ["Python", "FastAPI", "MLflow", "Docker", "XGBoost"],
    github: "https://github.com/Navodya52/CloudPilot-MLOps",
    featured: true,
  },
  {
    number: "02",
    title: "SimTraffic AI",
    description:
      "An intelligent traffic simulation project designed to explore AI-assisted traffic flow, simulation logic, analytics, and modern engineering practices.",
    tags: ["AI", "Simulation", "Python", "React"],
    github: "https://github.com/Navodya52/SimTraffic-AI",
  },
  {
    number: "03",
    title: "AURA AI",
    description:
      "A personal AI companion built with React, Firebase authentication, OpenRouter integration, persistent chat history, and a friendly conversational interface.",
    tags: ["React", "Firebase", "OpenRouter", "AI"],
    github: "https://github.com/Navodya52",
  },
  {
    number: "04",
    title: "FlowForge",
    description:
      "An event-driven order-processing platform demonstrating distributed workflows, scalable architecture, and reliable backend design.",
    tags: ["Microservices", "Events", "Backend", "Cloud"],
    github: "https://github.com/Navodya52/FlowForge",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="sectionContainer">
        <div className="sectionHeading rowHeading">
          <div>
            <p className="sectionEyebrow">SELECTED PROJECTS</p>
            <h2>Work that shows how I think and build.</h2>
          </div>
          <a
            className="textLink"
            href="https://github.com/Navodya52"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="projectsGrid">
          {projects.map((project, index) => (
            <motion.article
              className={`projectCard ${project.featured ? "projectFeatured" : ""}`}
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
            >
              <div className="projectTop">
                <span>{project.number}</span>
                {project.featured ? <em>FEATURED</em> : <Layers3 size={19} />}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="projectTags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Code2 size={17} />
                View project
                <ArrowUpRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
