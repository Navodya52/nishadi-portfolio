export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href="#home" className="logo">
          NW<span>.</span>
        </a>
        <p>Designed and built with Next.js.</p>
      </div>

      <div className="footerLinks">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a
          href="https://github.com/Navodya52"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
