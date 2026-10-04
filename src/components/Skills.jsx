import { useState, useEffect } from 'react';
import { getSkills } from '../api/api';
import SkillCard from './SkillCard';
import './Skills.css';

function Skills() {
  const [skills, setSkills] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Toutes');

  useEffect(() => {
    getSkills().then(setSkills).catch((err) => console.error(err));
  }, []);

  const categories = ['Toutes', ...new Set(skills.map((s) => s.category))];

  const filteredSkills =
    activeCategory === 'Toutes'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="competences" className="skills">
      <div className="container reveal">
        <p className="section-tag">Compétences</p>
        <h2 className="section-title">Ce que je maîtrise (et ce que j'apprends)</h2>

        <div className="skills-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;