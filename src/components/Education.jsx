import education from '../data/education';
import './Education.css';

function Education() {
  return (
    <section id="formation" className="education">
      <div className="container">
        <p className="section-tag">Formation</p>
        <h2 className="section-title">Mon parcours académique</h2>

        <div className="timeline reveal">
          {education.map((edu) => (
            <div className="timeline-item" key={edu.id}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3 className="timeline-role">{edu.degree}</h3>
                <p className="timeline-company">
                  {edu.school}
                  {edu.period && <span className="timeline-period"> — {edu.period}</span>}
                </p>
                <p className="timeline-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;