"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const emailAddress = "nishadiwickramaarachchi52@gmail.com";

const gmailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1" +
  `&to=${encodeURIComponent(emailAddress)}` +
  `&su=${encodeURIComponent("Portfolio Opportunity / Project Inquiry")}` +
  `&body=${encodeURIComponent(
    "Hi Nishadi,\n\nI visited your portfolio and would like to contact you regarding:\n\n"
  )}`;

export default function Contact() {
  return (
    <section className="section contactSection" id="contact">
      <div className="sectionContainer">
        <motion.div
          className="contactCard"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="sectionEyebrow">LET&apos;S CONNECT</p>

            <h2>Have an opportunity or project in mind?</h2>

            <p>
              I am interested in software engineering, web development, AI,
              cloud, and MLOps opportunities where I can learn and contribute.
            </p>

            <div className="contactDetails">
              <a
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={18} />
                {emailAddress}
              </a>

              <span>
                <MapPin size={18} />
                Sri Lanka
              </span>
            </div>
          </div>

          <a
            className="contactButton"
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Send an email
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}