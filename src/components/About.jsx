import './About.css';

function About() {
  return (
    <section id="apropos" className="about">
      <div className="container about-content reveal">
        <div className="about-text">
          <p className="section-tag">À propos</p>
          <h2 className="section-title">Qui suis-je ?</h2>

          <p>
            Je suis actuellement en <strong>Licence 2</strong>, où je me forme
            au développement web et au marketing digital. J'aime autant
            construire des interfaces propres et fonctionnelles que réfléchir
            à la manière de présenter un produit ou une marque en ligne.
          </p>

          <p>
            Mon parcours mêle technique et communication : je code avec
            React et Django, tout en explorant le SEO, les réseaux sociaux
            et la stratégie digitale. Cette double compétence me permet
            d'aborder un projet web dans sa globalité, du code à la visibilité.
          </p>

          <p>
            Mon objectif : devenir une <strong>développeuse web polyvalente</strong>,
            capable de concevoir un site de A à Z tout en comprenant les
            enjeux marketing qui l'entourent.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <span className="highlight-number">L2</span>
            <p>Développement web & marketing digital</p>
          </div>
          <div className="highlight-card">
            <span className="highlight-number">3+</span>
            <p>Projets réalisés (React, Django, WordPress)</p>
          </div>
          <div className="highlight-card">
            <span className="highlight-number">3</span>
            <p>Expériences en marketing & communication</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;