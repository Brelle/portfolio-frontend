import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { sendContactMessage } from '../api/api';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });
  const [statut, setStatut] = useState(null);
  const [erreurMsg, setErreurMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

    if (!formData.nom || !formData.email || !formData.sujet || !formData.message) {
      setErreurMsg('Merci de remplir tous les champs.');
      setStatut('erreur');
      return;
    }
    if (!emailValide) {
      setErreurMsg('Merci de saisir une adresse email valide.');
      setStatut('erreur');
      return;
    }

    sendContactMessage(formData)
      .then(() => {
        setStatut('succes');
        setFormData({ nom: '', email: '', sujet: '', message: '' });
      })
      .catch(() => {
        setErreurMsg("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
        setStatut('erreur');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-content reveal">
        <div className="contact-info">
          <p className="section-tag">Contact</p>
          <h2 className="section-title">Discutons de votre projet</h2>
          <p className="contact-text">
            Une question, une opportunité de stage, ou simplement envie
            d'échanger ? N'hésitez pas à m'écrire.
          </p>

          <div className="contact-details">
            <a href="mailto:moueleyembi@gmail.com" className="contact-detail-item">
              <FaEnvelope />
              <span>moueleyembi@gmail.com</span>
            </a>
            <div className="contact-detail-item">
              <FaMapMarkerAlt />
              <span>Dakar, Sénégal</span>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/brelle-mouele-yembi-963b95302" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/Brelle" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Votre nom"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="sujet">Sujet</label>
            <input
              type="text"
              id="sujet"
              name="sujet"
              value={formData.sujet}
              onChange={handleChange}
              placeholder="Sujet de votre message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Envoyer</button>

          {statut === 'succes' && (
            <p className="form-feedback success">Merci pour votre message ! Je vous répondrai dans les meilleurs délais.</p>
          )}
          {statut === 'erreur' && (
            <p className="form-feedback error">{erreurMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;