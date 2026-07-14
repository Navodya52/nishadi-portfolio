"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  Cloud,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Users,
} from "lucide-react";

const universitySections = [
  {
    icon: GraduationCap,
    title: "Academic Journey",
    subtitle: "University of Sri Jayewardenepura",
    details: [
      "Faculty: Faculty of Computing",
      "Degree Program: Bachelor of Science (Honours) in Software Engineering",
      "Duration: June 2023 – Present",
    ],
    description:
      "My academic journey at the Faculty of Computing has strengthened my analytical thinking, problem-solving ability, and interest in technology-driven solutions. Through lectures, labs, projects, and collaborative work, I continue to grow as a learner while preparing myself for a career in software engineering.",
  },
  {
    icon: BookOpen,
    title: "EduACS",
    subtitle: "Educational Initiative",
    details: [
      "Role: Secretary",
      "Nature: Volunteering and Educational Outreach",
    ],
    description:
      "Through EduACS, I contributed to educational initiatives focused on empowering school students through knowledge sharing, seminars, and academic guidance. This experience helped me strengthen my communication, organization, teamwork, and leadership skills.",
  },
  {
    icon: Cloud,
    title: "Beauty of Cloud",
    subtitle: "IEEE Computer Society Chapter",
    details: [
      "Role: Member - Design Committee",
      "Affiliation: IEEE Computer Society",
    ],
    description:
      "Through my involvement in the Beauty of Cloud initiative, I participated in technology-oriented and creative activities that promoted innovation and teamwork. This experience increased my interest in emerging computing concepts and student-led technical communities.",
  },
  {
    icon: Users,
    title: "Catholic Student Movement",
    subtitle: "University Student Society",
    details: ["Role: Member"],
    description:
      "Being part of the Catholic Student Movement allowed me to grow spiritually and socially while participating in value-based activities, community bonding, and service-oriented programs within the university environment.",
  },
];

const innovationProjects = [
  {
    icon: Lightbulb,
    title: "SafeHer Empower",
    subtitle: "Artemia 1.0 Ideathon Finalist",
    details: [
      "Organized by: IEEE WIE Student Branch Affinity Group",
      "Achievement: Selected as a Finalist",
      "Project Type: Women-Centric Empowerment Platform",
    ],
    description:
      "SafeHer Empower is a women-centric platform designed to build safe communities through awareness, shared experiences, and a reward-based engagement system.",
    features: [
      "Community forum for verified women users",
      "Safety Karma Network with points, levels, and rewards",
      "Awareness feed with campaigns and safety tips",
      "User profiles showcasing achievements and contributions",
      "High-fidelity clickable Figma prototype",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "ShareCom",
    subtitle: "Inter-University Startup Challenge",
    details: [
      "Team Name: SECRETX",
      "University: University of Sri Jayewardenepura",
      "Category: Educational Social Media Platform",
    ],
    description:
      "ShareCom is a dedicated social media platform designed for students, lecturers, and academic communities to share university events, courses, and educational opportunities without the distractions of traditional social media platforms.",
    features: [
      "Categorized academic event sharing",
      "Course and opportunity announcements",
      "Relevant notifications for students",
      "Academic-only content environment",
      "Focused information delivery without irrelevant feeds",
    ],
  },
];

const certificates = [
  "Finalist Certificate – Artemia 1.0 Ideathon, IEEE WIE",
  "Participation Certificate – TechXplore Edition 1.0",
  "Project Completion Certificate – Live IPL Score App using React and JavaScript",
  "Participation Certificate – Git and GitHub Workshop, Procode Lab",
  "Course Completion Certificate – Full Git Course, DataCamp",
];

export default function UniversityLife() {
  return (
    <section className="section sectionAlt" id="university">
      <div className="sectionContainer">
        <div className="sectionHeading">
          <p className="sectionEyebrow">
            UNIVERSITY LIFE &amp; VOLUNTEERING
          </p>

          <h2>
            A journey of learning, leadership, service, and self-discovery.
          </h2>

          <p>
            University life marked a transformative phase in my personal and
            academic growth. From structured learning environments to real-world
            experiences, this journey shaped my mindset, technical skills,
            creativity, leadership, teamwork, and sense of responsibility.
          </p>
        </div>

        <div className="universitySubHeading">
          <p className="sectionEyebrow">ACADEMIC &amp; STUDENT LIFE</p>
          <h3>Learning beyond the classroom.</h3>
          <p>
            Beyond academics, I actively engaged in volunteering and student
            societies that strengthened my leadership, communication, teamwork,
            and community-service skills.
          </p>
        </div>

        <div className="universityGrid">
          {universitySections.map((entry, index) => {
            const Icon = entry.icon;

            return (
              <motion.article
                className="universityCard"
                key={entry.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className="universityIcon">
                  <Icon size={24} />
                </div>

                <span className="universitySubtitle">{entry.subtitle}</span>

                <h3>{entry.title}</h3>

                <div className="universityDetails">
                  {entry.details.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>

                <p>{entry.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="universitySubHeading innovationHeading">
          <p className="sectionEyebrow">PROJECTS, IDEATHONS &amp; INNOVATION</p>
          <h3>Using ideas to solve meaningful problems.</h3>
        </div>

        <div className="innovationGrid">
          {innovationProjects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                className="innovationCard"
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="innovationTop">
                  <div className="universityIcon">
                    <Icon size={24} />
                  </div>

                  <span>{project.subtitle}</span>
                </div>

                <h3>{project.title}</h3>

                <div className="universityDetails">
                  {project.details.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>

                <p>{project.description}</p>

                <h4>Key Features</h4>

                <ul className="universityList">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <div className="universityBottomGrid">
          <motion.article
            className="universityLargeCard"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="universityIcon">
              <Award size={24} />
            </div>

            <span className="universitySubtitle">
              CONTINUOUS LEARNING
            </span>

            <h3>Certificates &amp; Achievements</h3>

            <ul className="universityList">
              {certificates.map((certificate) => (
                <li key={certificate}>{certificate}</li>
              ))}
            </ul>

            <p>
              These certifications reflect my continuous effort to improve my
              technical skills, explore new domains, and actively participate in
              learning opportunities beyond the classroom.
            </p>
          </motion.article>

          <motion.article
            className="universityLargeCard teachingCard"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <div className="universityIcon">
              <HeartHandshake size={24} />
            </div>

            <span className="universitySubtitle">
              GIVING BACK THROUGH TEACHING
            </span>

            <h3>Mathematics Teaching for School Students</h3>

            <div className="universityDetails">
              <span>Organized by: University Leo Club</span>
              <span>Location: Sri Saddharmodaya Vidyalaya, Nugegoda</span>
            </div>

            <p>
              Teaching mathematics to school students was a deeply fulfilling
              volunteering experience. It allowed me to share knowledge, inspire
              young minds, and understand the responsibility that comes with
              being both a learner and an educator.
            </p>

            <p>
              This experience strengthened my communication skills and
              reinforced my passion for education-based community service.
            </p>
          </motion.article>
        </div>

        <motion.div
          className="universityClosing"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="sectionEyebrow">MY UNIVERSITY STORY</p>

          <h3>
            Growth, service, creativity, and purpose.
          </h3>

          <p>
            University life has been more than an academic journey. Each
            experience, project, achievement, and contribution continues to
            shape the software engineer and person I am becoming.
          </p>
        </motion.div>
      </div>
    </section>
  );
}