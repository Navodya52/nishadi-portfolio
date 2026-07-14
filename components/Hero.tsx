"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Mail,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="heroSection" id="home">
      <div className="backgroundGrid" />
      <div className="purpleGlow" />
      <div className="cyanGlow" />

      <div className="heroContainer">
        <motion.div
          className="heroContent"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="availableBadge">
            <span className="statusDot" />
            Available for opportunities
          </div>

          <p className="heroLabel">SOFTWARE ENGINEERING UNDERGRADUATE</p>

          <h1 className="heroTitle">
            Building digital
            <br />
            experiences that
            <br />
            <span>make an impact.</span>
          </h1>

          <p className="heroText">
            Hi, I&apos;m Nishadi Wickramaarachchi. I build modern web
            applications, AI-powered systems, and cloud-native solutions using
            Next.js, FastAPI, Docker, and machine learning.
          </p>

          <div className="heroActions">
            <a href="#projects" className="primaryButton">
              Explore My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="secondaryButton">
              Let&apos;s Talk
            </a>
          </div>

          <div className="socialLinks">
            <a
              href="https://github.com/Navodya52"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={20} />
            </a>
            <a href="#experience" aria-label="Experience">
              <BriefcaseBusiness size={20} />
            </a>
            <a
              href="mailto:nishadiwickramaarachchi52@gmail.com"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="heroVisual"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="profileOrbit">
            <div className="orbitRing orbitRingOne" />
            <div className="orbitRing orbitRingTwo" />

            <div className="profileCard">
              <div className="profileTop">
                <span />
                <span />
                <span />
              </div>
              <div className="profileInitials">NW</div>
              <div className="profileInfo">
                <p>Nishadi Wickramaarachchi</p>
                <span>Software Engineer</span>
              </div>
              <div className="profileTech">
                <span>Next.js</span>
                <span>AI</span>
                <span>Cloud</span>
                <span>MLOps</span>
              </div>
            </div>

            <div className="floatingTag tagOne">React</div>
            <div className="floatingTag tagTwo">Python</div>
            <div className="floatingTag tagThree">Docker</div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scrollIndicator">
        <span>Scroll to explore</span>
        <ArrowDown size={17} />
      </a>
    </section>
  );
}
