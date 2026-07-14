"use client";

import { Download } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#home" className="logo" aria-label="Home">
          NW<span>.</span>
        </a>

        <div className="navLinks">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/Nishadi-Wickramaarachchi-CV.pdf"
          className="resumeButton"
          download
        >
          <Download size={17} />
          Resume
        </a>
      </nav>
    </header>
  );
}
