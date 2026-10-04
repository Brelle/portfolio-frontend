import { useState, useEffect } from 'react';
import { getProjects } from '../api/api';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeTech, setActiveTech] = useState('Toutes');

  useEffect(() => {
    getProjects().then((data) => {
      const formatted = data.map((p) => ({
        ...p,
        technologies: p.technologies.split(',').map((t) => t.trim()),
        demoLink: p.demo_link,
        githubLink: p.github_link,
        image: p.image || null,
      }));
      setProjects(formatted);
    }).catch((err) => console.error(err));
  }, []);

  const allTechs = ['Toutes', ...new Set(projects.flatMap((p) => p.technologies))];

  const filteredProjects =
    activeTech === 'Toutes'
      ? projects
      : projects.filter((p) => p.technologies.includes(activeTech));

  return (
    <section id="projets" className="projects">
      <div className="container reveal">
        <p className="section-tag">Projets</p>
        <h2 className="section-title">Mes réalisations</h2>

        <div className="skills-filters">
          {allTechs.map((tech) => (
            <button
              key={tech}
              className={`filter-btn ${activeTech === tech ? 'active' : ''}`}
              onClick={() => setActiveTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;