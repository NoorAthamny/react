import { socialLinks, navLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="footer-link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((social, id) => (
          <li key={id}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <i className={social.iconClass}></i>
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
