import experiences from '../data/experience';
import './Experience.css';

function Experience() {
  return (
    <section id="experiences" className="experience">
      <div className="container">
        <p className="section-tag">Expériences</p>
        <h2 className="section-title">Mon parcours professionnel</h2>

        <div className="timeline reveal">
          {experiences.map((exp) => (
            <div className="timeline-item" key={exp.id}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company">
                  {exp.company}
                  {exp.period && <span className="timeline-period"> — {exp.period}</span>}
                </p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;