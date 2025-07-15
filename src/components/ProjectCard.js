import React from 'react';

const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech:</strong> {tech.join(', ')}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Source</a>
    </div>
  );
};

export default ProjectCard;
