import './Hero.css';

function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Bonjour, je suis</p>
          <h1 className="hero-name">Brelle Mouele Yembi</h1>
          <h2 className="hero-title">Étudiante en développement web & marketing digital</h2>
          <p className="hero-text-desc">
            En formation Licence 2, je conçois des interfaces web modernes
            et j'explore le marketing digital pour créer des expériences
            à la fois utiles et esthétiques.
          </p>

          <div className="hero-buttons">
            <a href="#projets" className="btn btn-primary">Voir mes projets</a>
            <a href="/cv-brelle.pdf" className="btn btn-outline" download>Télécharger mon CV</a>
            <a href="#contact" className="btn btn-outline">Me contacter</a>
          </div>
        </div>

        <div className="hero-photo">
          <img src="/profile-photo.jpg" alt="Brelle Mouele Yembi" />
        </div>
      </div>
    </section>
  );
}

export default Hero;