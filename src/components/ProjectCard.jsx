import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="project-card">
        <div className="project-image">
          <img src={project.image} alt={project.name} onError={(e) => { e.target.style.display = 'none'; }} />
        </div>

        <div className="project-body">
          <h3 className="project-name">{project.name}</h3>
          <p className="project-description-short">{project.description}</p>

          <div className="project-tech">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
            {project.technologies.length > 3 && (
              <span className="tech-badge tech-badge-more">+{project.technologies.length - 3}</span>
            )}
          </div>

          <button className="btn-voir-plus" onClick={() => setShowModal(true)}>
            + Voir plus
          </button>
        </div>
      </div>

      {showModal && (
        <div className="project-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={() => setShowModal(false)}>
              <FaTimes />
            </button>

            <img src={project.image} alt={project.name} className="project-modal-image" onError={(e) => { e.target.style.display = 'none'; }} />

            <h3 className="project-modal-name">{project.name}</h3>
            <p className="project-modal-description">{project.description}</p>

            <p className="project-modal-problem"><strong>Objectif :</strong> {project.problem}</p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noreferrer" className="project-link">
                  <FaExternalLinkAlt /> Voir le projet
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-link">
                  <FaGithub /> Voir sur GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;