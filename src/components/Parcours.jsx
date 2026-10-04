import { useState, useEffect } from 'react';
import { getExperiences, getEducations } from '../api/api';
import './Parcours.css';

function Parcours() {
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    getExperiences().then(setExperiences).catch((err) => console.error(err));
    getEducations().then(setEducation).catch((err) => console.error(err));
  }, []);

  return (
    <section id="parcours" className="parcours">
      <div className="container reveal">
        <p className="section-tag">Parcours</p>
        <h2 className="section-title">Mon académique & professionnel</h2>

        <div className="parcours-columns">
          <div className="parcours-column">
            <h3 className="parcours-column-title">Parcours académique</h3>
            <div className="timeline parcours-timeline">
              {education.map((item) => (
                <div className="timeline-item" key={item.id}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-role">{item.degree}</h4>
                    <p className="timeline-company">
                      {item.school}
                      {item.period && <span className="timeline-period"> — {item.period}</span>}
                    </p>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="parcours-column">
            <h3 className="parcours-column-title">Parcours professionnel</h3>
            <div className="timeline parcours-timeline">
              {experiences.map((item) => (
                <div className="timeline-item" key={item.id}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-role">{item.role}</h4>
                    <p className="timeline-company">
                      {item.company}
                      {item.period && <span className="timeline-period"> — {item.period}</span>}
                    </p>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parcours;