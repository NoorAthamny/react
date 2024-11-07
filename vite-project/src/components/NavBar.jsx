import { navLinks, socialLinks } from "../data";

const NavBar = () => {
  return (
    <nav className="navbar">
      <article className="nav-center">
        <section className="nav-header">
          <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </section>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="nav-icons">
          {socialLinks.map((social, id) => (
            <li key={id}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
              >
                <i className={social.iconClass}></i>
              </a>
            </li>
          ))}
        </ul>
      </article>
    </nav>
  );
};

export default NavBar;
