"use client";

import { motion } from "framer-motion";
import {
  Award,
  Baby,
  BookOpenCheck,
  Church,
  Crown,
  GraduationCap,
  Medal,
  School,
} from "lucide-react";

const schoolJourney = [
  {
    icon: <Baby size={24} />,
    period: "2005 – 2006",
    title: "Early Childhood",
    subtitle: "Where the journey began",
    details: [
      "2005 – Geethanjaly Pre School",
      "2006 – Holy Family Convent Nursery",
    ],
    description:
      "My journey began with curiosity, innocence, and small steps that slowly shaped who I would become.",
  },
  {
    icon: <School size={24} />,
    period: "2007 – 2012",
    title: "Primary School Years",
    subtitle: "Grade 1 – Grade 5",
    details: ["Holy Family Convent, Kalutara"],
    description:
      "These years were filled with learning, discipline, and early achievements that built my confidence and love for education.",
  },
  {
    icon: <BookOpenCheck size={24} />,
    period: "2013 – 2017",
    title: "Secondary School Years",
    subtitle: "Grade 6 – Grade 11",
    details: ["Holy Family Convent, Kalutara"],
    description:
      "This phase defined my academic consistency, discipline, confidence, and growing leadership responsibilities.",
  },
  {
    icon: <GraduationCap size={24} />,
    period: "2018 – 2020",
    title: "Advanced Level Years",
    subtitle: "Academic Growth & Leadership",
    details: ["Served as Deputy Head Prefect"],
    description:
      "Serving as Deputy Head Prefect was one of the most defining experiences of my school life. It strengthened my leadership skills, confidence, responsibility, and ability to work with others.",
  },
  {
    icon: <Church size={24} />,
    period: "Nursery – O/L",
    title: "Values Beyond Academics",
    subtitle: "Spiritual & Moral Learning",
    details: [
      "Dhamma School – Nursery to O/L",
      "St. Mary’s Daham Pasala",
    ],
    description:
      "Alongside formal education, I developed strong values, discipline, and moral awareness through spiritual learning and community participation.",
  },
];

const achievementCards = [
  {
    icon: <BookOpenCheck size={24} />,
    title: "Academic Excellence",
    items: [
      "First in Class – Grade 11, all terms from 2017 to 2020",
      "G.C.E. Ordinary Level Examination – 9 As",
      "Grade 5 Scholarship Examination – 150 Marks",
      "Advanced Level First Attempt: A in Combined Mathematics, B in Chemistry, C in Physics, C in General English, and 80% for General Knowledge",
      "Advanced Level Second Attempt: 3 Bs in Combined Mathematics, Physics, and Chemistry",
      "General Information Technology Examination – A",
      "Catholic Dham Pasal Final Examination 2017/2018 – 4 Distinctions",
    ],
  },
  {
    icon: <Medal size={24} />,
    title: "Academic Competitions",
    items: [
      "1st Place – ICT Word Processing, Zonal Level, 2016",
      "1st Place – Computer Programming, Inter-School Competition, 2017",
      "2nd Place – Business and Accounting General Knowledge, 2017",
      "3rd Place – Electronic Presentation, 2015 and 2017",
      "3rd Place – IT Typing, Grade 7",
      "1st Place – Mathematics Speed Efficiency Test, Grade 7",
      "High Distinction – ANCQ, 2017 and 2018",
      "2nd Place – Tamil Copywriting",
      "Selected for the International Olympiad Mathematics Test, 2019",
    ],
  },
  {
    icon: <Crown size={24} />,
    title: "Leadership, Arts, Sports & Co-curricular Activities",
    items: [
      "Junior Prefect – 2018",
      "Senior Prefect and Deputy Head Prefect – 2019",
      "Secretary – Prefects’ Union, 2018–2019",
      "Committee Member – Science Union, 2020",
      "Committee Member – ICT Club, 2015",
      "Committee Member – Sinhala Literary Association, 2013",
      "Class Monitor – Every year from Grade 6 to Grade 11",
      "Steward – Grade 10 and Grade 11",
      "Inter-School Art Exhibition – Merit Award, Junior Category",
      "School Sports Meet – Participation and Placements",
      "Junior Western Band Member",
      "Perfect Attendance Awards",
    ],
  },
  {
    icon: <Award size={24} />,
    title: "Certificates & Courses",
    items: [
      "MaxMind International Education Center – Information Technology Course and Examination, 2013 – A+ Pass",
      "Institute of Human Resource Advancement, University of Colombo – Certificate in English Language, Intermediate Level, 2022 – Distinction Pass",
      "Evotech Education – Java Programming Masterclass, 2024 – Completed with hands-on experience in Java, object-oriented programming, and problem-solving",
    ],
  },
];

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="sectionContainer">
        <div className="sectionHeading">
          <p className="sectionEyebrow">CHILDHOOD &amp; SCHOOL LIFE</p>

          <h2>Where it all began.</h2>

          <p>
            My childhood laid the foundation for who I am today. From early
            school days to discovering responsibility, discipline, and
            confidence, these years shaped my values, character, and
            determination.
          </p>
        </div>

        <div className="schoolJourneyGrid">
          {schoolJourney.map((stage, index) => (
            <motion.article
              className="schoolJourneyCard"
              key={stage.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div className="schoolJourneyTop">
                <div className="schoolJourneyIcon">{stage.icon}</div>
                <span>{stage.period}</span>
              </div>

              <h3>{stage.title}</h3>
              <h4>{stage.subtitle}</h4>

              <div className="schoolJourneyDetails">
                {stage.details.map((detail) => (
                  <span key={detail}>{detail}</span>
                ))}
              </div>

              <p>{stage.description}</p>
            </motion.article>
          ))}
        </div>

        <div className="achievementsHeading">
          <p className="sectionEyebrow">ACHIEVEMENTS &amp; RECOGNITIONS</p>
          <h2>Moments that marked my journey.</h2>
          <p>
            These achievements reflect my academic commitment, competitive
            spirit, creativity, leadership, discipline, and willingness to
            contribute beyond the classroom.
          </p>
        </div>

        <div className="achievementGrid">
          {achievementCards.map((card, index) => (
            <motion.article
              className="achievementCard"
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <div className="achievementIcon">{card.icon}</div>

              <h3>{card.title}</h3>

              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}