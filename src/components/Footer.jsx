import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const anneeActuelle = new Date().getFullYear();

  const links = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#apropos' },
    { label: 'Projets', href: '#projets' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <p className="footer-logo">Brelle Mouele Yembi<span>.</span></p>
          <p className="footer-tagline">Étudiante en développement web & marketing digital</p>
        </div>

        <div className="footer-links">
          {links.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div className="footer-socials">
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="GitHub"><FaGithub /></a>
          <a href="mailto:brelle.mouele@email.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {anneeActuelle} Brelle Mouele Yembi — Tous droits réservés</p>
      </div>
    </footer>
  );
}

export default Footer;